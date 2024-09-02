import { getBase } from '@/lib/airtable/api/base';

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
  const baseInfo = await getBase(params.id);
  console.log(baseInfo);
  return (
    <div>
      <h1>Base Tables Schema</h1>
      <code>{JSON.stringify(baseInfo)}</code>
    </div>
  );
}
