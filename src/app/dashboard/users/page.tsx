import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function UsersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar User</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">Tabel daftar santri/guru.</p>
      </CardContent>
    </Card>
  );
}