"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
// import { ArrowUpRight } from "lucide-react";

// ---------- Schema ----------
const schema = z.object({
  plan: z.enum(["1", "2+", "2", "3+", "3"]),
  carValue: z.number().min(50_000).max(3_000_000),
  age: z.number().min(18).max(80),
  city: z.enum(["bkk", "metro", "upcountry"]),
  ncd: z.number().int().min(0).max(50),
  // มี default => อินพุตอนุญาต undefined
  claimLastYear: z.boolean().default(false),
  flood: z.boolean().default(false),
  fire: z.boolean().default(false),
  paDriver: z.boolean().default(false),
  roadside: z.boolean().default(false),
  payFreq: z.enum(["annual", "monthly"]).default("annual"),
});

// ใช้ชนิดอินพุตของ schema กับ useForm
type FormInput = z.input<typeof schema>;
// ใช้ชนิดเอาท์พุต (หลัง parse) กับฟังก์ชันคำนวณ
type FormOutput = z.output<typeof schema>;

// ---------- Mock rates ----------
const PLAN_RATE: Record<FormOutput["plan"], number> = {
  "1": 0.028,
  "2+": 0.021,
  "2": 0.018,
  "3+": 0.015,
  "3": 0.012,
};
const CITY_FACTOR = { bkk: 1.1, metro: 1.05, upcountry: 1.0 } as const;
const AGE_LOAD = (age: number) => (age < 25 ? 1.12 : age <= 60 ? 1 : 1.06);
const NCD_DISCOUNT: Record<number, number> = { 0: 0, 10: 0.1, 20: 0.2, 30: 0.3, 40: 0.4, 50: 0.5 };
const ADDON_PRICES = { flood: 700, fire: 500, paDriver: 350, roadside: 300 };

function calc(d: FormOutput) {
  const baseRate = PLAN_RATE[d.plan];
  const basePremium = d.carValue * baseRate;

  const cityFactor = CITY_FACTOR[d.city];
  const ageFactor = AGE_LOAD(d.age);
  const ncd = NCD_DISCOUNT[d.ncd] ?? 0;

  const ncdDiscount = basePremium * ncd * -1;
  const claimLoading = d.claimLastYear ? basePremium * 0.1 : 0;
  const addons =
    (d.flood ? ADDON_PRICES.flood : 0) +
    (d.fire ? ADDON_PRICES.fire : 0) +
    (d.paDriver ? ADDON_PRICES.paDriver : 0) +
    (d.roadside ? ADDON_PRICES.roadside : 0);

  const factored = basePremium * cityFactor * ageFactor;
  const subtotal = factored + ncdDiscount + claimLoading + addons;

  const stamp = Math.max(0, subtotal) * 0.004;
  const vat = Math.max(0, subtotal + stamp) * 0.07;
  const totalAnnual = Math.max(0, subtotal + stamp + vat);

  return {
    basePremium,
    cityFactor,
    ageFactor,
    ncdDiscount,
    claimLoading,
    addons,
    stamp,
    vat,
    totalAnnual,
    monthly: totalAnnual / 12,
  };
}

export default function CalculatorPage() {
  const {
    control,
    register,
    // handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      plan: "1",
      carValue: 500_000,
      age: 30,
      city: "bkk",
      ncd: 20,
      claimLastYear: false,
      flood: true,
      fire: false,
      paDriver: true,
      roadside: true,
      payFreq: "annual",
    },
    mode: "onChange",
  });

  // ค่าจากฟอร์ม (อินพุต) -> parse เป็นเอาท์พุตผ่าน schema ใน resolver ให้แล้ว
  const values = watch();
  // values คือ FormInput; แต่ calc ต้องการ FormOutput
  // ที่การ submit จริง RHF จะส่งข้อมูลที่ผ่าน resolver แล้ว (เป็น FormOutput)
  // สำหรับการคำนวณแบบ live นี้ เราแคสแบบปลอดภัยได้เพราะ defaultValues เติมครบ
  const quote = calc(values as unknown as FormOutput);

  const fmt = (n: number) =>
    new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 }).format(n || 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">เครื่องมือคำนวณเบี้ยประกัน</h1>
        <Badge variant="secondary" className="rounded-full">RHF + zod</Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* LEFT: FORM */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>กรอกข้อมูล</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* แผนประกัน */}
            <div className="grid gap-2">
              <Label>แผนประกัน</Label>
              <Controller
                control={control}
                name="plan"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue placeholder="เลือกแผน" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">ชั้น 1</SelectItem>
                      <SelectItem value="2+">ชั้น 2+</SelectItem>
                      <SelectItem value="2">ชั้น 2</SelectItem>
                      <SelectItem value="3+">ชั้น 3+</SelectItem>
                      <SelectItem value="3">ชั้น 3</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.plan && <p className="text-sm text-red-600">{errors.plan.message as string}</p>}
            </div>

            {/* ทุนประกัน (Input + Slider) */}
            <div className="grid gap-2">
              <Label>ทุนประกัน (บาท)</Label>
              <Input
                type="number"
                inputMode="numeric"
                {...register("carValue", { valueAsNumber: true })}
                onChange={(e) => setValue("carValue", Number(e.target.value || 0), { shouldValidate: true })}
                min={50_000}
                max={3_000_000}
              />
              <Controller
                control={control}
                name="carValue"
                render={({ field }) => (
                  <Slider
                    value={[field.value ?? 0]}
                    min={50_000}
                    max={3_000_000}
                    step={10_000}
                    onValueChange={([v]) => field.onChange(v)}
                  />
                )}
              />
              {errors.carValue && <p className="text-sm text-red-600">{errors.carValue.message as string}</p>}
            </div>

            {/* อายุผู้ขับ */}
            <div className="grid gap-2">
              <Label>อายุผู้ขับหลัก (ปี)</Label>
              <Input
                type="number"
                inputMode="numeric"
                {...register("age", { valueAsNumber: true })}
                onChange={(e) => setValue("age", Number(e.target.value || 0), { shouldValidate: true })}
                min={18}
                max={80}
              />
              {errors.age && <p className="text-sm text-red-600">{errors.age.message as string}</p>}
            </div>

            {/* พื้นที่ใช้งาน */}
            <div className="grid gap-2">
              <Label>พื้นที่ใช้งานรถ</Label>
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue placeholder="เลือกพื้นที่" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bkk">กรุงเทพฯ</SelectItem>
                      <SelectItem value="metro">ปริมณฑล</SelectItem>
                      <SelectItem value="upcountry">ต่างจังหวัด</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.city && <p className="text-sm text-red-600">{errors.city.message as string}</p>}
            </div>

            {/* NCD */}
            <div className="grid gap-2">
              <Label>ส่วนลดประวัติดี (NCD %)</Label>
              <Controller
                control={control}
                name="ncd"
                render={({ field }) => (
                  <Select value={String(field.value)} onValueChange={(v) => field.onChange(Number(v))}>
                    <SelectTrigger><SelectValue placeholder="เลือก NCD" /></SelectTrigger>
                    <SelectContent>
                      {[0,10,20,30,40,50].map(n => (
                        <SelectItem key={n} value={String(n)}>{n}%</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.ncd && <p className="text-sm text-red-600">{errors.ncd.message as string}</p>}
            </div>

            {/* สวิตช์ & Add-ons */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "claimLastYear", label: "เคยเคลมปีก่อน", hint: "+10% โหลด" },
                { name: "flood", label: "คุ้มครองน้ำท่วม", hint: `+฿${ADDON_PRICES.flood}` },
                { name: "fire", label: "คุ้มครองไฟไหม้", hint: `+฿${ADDON_PRICES.fire}` },
                { name: "paDriver", label: "อุบัติเหตุผู้ขับ (PA)", hint: `+฿${ADDON_PRICES.paDriver}` },
                { name: "roadside", label: "ช่วยเหลือฉุกเฉิน 24 ชม.", hint: `+฿${ADDON_PRICES.roadside}` },
              ].map((it) => (
                <div key={it.name} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <Label>{it.label}</Label>
                    <p className="text-sm text-muted-foreground">{it.hint}</p>
                  </div>
                  <Controller
                    control={control}
                    name={it.name as keyof FormInput}
                    render={({ field }) => (
                      <Switch checked={Boolean(field.value)} onCheckedChange={field.onChange} />
                    )}
                  />
                </div>
              ))}
            </div>

            {/* รูปแบบชำระ */}
            <div className="grid gap-2">
              <Label>รูปแบบการชำระ</Label>
              <Controller
                control={control}
                name="payFreq"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue placeholder="เลือกรูปแบบ" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="annual">รายปี</SelectItem>
                      <SelectItem value="monthly">รายเดือน (12 งวด)</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="flex gap-3">
              {/* <Button
                type="submit"
                onClick={handleSubmit((d) => {
                  // d ที่ได้จาก handleSubmit คือข้อมูลหลัง parse แล้ว => FormOutput
                  console.log("SUBMIT", d);
                })}
                className="rounded-full"
              >
                ขอใบเสนอราคา <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button> */}
              <Button type="button" variant="outline" className="rounded-full" onClick={() => reset()}>
                รีเซ็ต
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT: SUMMARY */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>สรุปเบี้ยโดยประมาณ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <span className="text-muted-foreground">เบี้ยพื้นฐาน</span>
              <span className="text-right">฿{fmt(quote.basePremium)}</span>

              <span className="text-muted-foreground">ปัจจัยพื้นที่</span>
              <span className="text-right">× {quote.cityFactor.toFixed(2)}</span>

              <span className="text-muted-foreground">ปัจจัยอายุ</span>
              <span className="text-right">× {quote.ageFactor.toFixed(2)}</span>

              <span className="text-muted-foreground">ส่วนลด NCD</span>
              <span className="text-right text-emerald-600">− ฿{fmt(Math.abs(quote.ncdDiscount))}</span>

              <span className="text-muted-foreground">โหลดประวัติเคลม</span>
              <span className="text-right">+ ฿{fmt(quote.claimLoading)}</span>

              <span className="text-muted-foreground">ค่า Add-ons</span>
              <span className="text-right">+ ฿{fmt(quote.addons)}</span>

              <span className="text-muted-foreground">อากรแสตมป์ ~0.4%</span>
              <span className="text-right">+ ฿{fmt(quote.stamp)}</span>

              <span className="text-muted-foreground">VAT 7%</span>
              <span className="text-right">+ ฿{fmt(quote.vat)}</span>
            </div>

            <div className="border-t pt-3">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">รวมรายปี (ประมาณ)</span>
                <span className="text-2xl font-semibold">฿{fmt(quote.totalAnnual)}</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>ชำระรายเดือน (12 งวด)</span>
                <span>฿{fmt(quote.monthly)} / เดือน</span>
              </div>
            </div>

            <div className="rounded-xl bg-accent/40 p-3">
              วิธีคำนวณนี้เป็นการประมาณเพื่อ UX เท่านั้น — อัตราจริงอาจต่างตามบริษัท/รุ่น/ปีรถ/เงื่อนไข
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}