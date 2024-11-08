import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/Dashboard/Dashboard'), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <Dashboard/>
    </div>
  );
}
