import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import Airtable from 'airtable';
import { listBase } from '@/lib/airtable/api/base';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default async function DashboardPage() {
  const bases = await listBase();
  console.log(bases);

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid lg:grid-cols-3 gap-2">
        {bases &&
          bases.bases.map((b) => (
            <Link key={b.id} href={`/dashboard/base/${b.id}`}>
              <Card>
                <CardHeader>{b.name}</CardHeader>
                <CardContent>
                  <Badge>{b.permissionLevel}</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
