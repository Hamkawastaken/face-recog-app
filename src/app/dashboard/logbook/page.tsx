import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LogbookPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logbook</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">
          Catatan absen pengambilan & pengembalian HP/Laptop.
        </p>
      </CardContent>
    </Card>
  );
}
