import Member_addpage from '@/components/Member_addform';

export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <div>
      <Member_addpage />
      <div className="h-20"></div>
    </div>
  );
}
