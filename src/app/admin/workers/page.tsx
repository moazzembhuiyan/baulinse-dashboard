import WorkersTable from './_Component/WorkersTable';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workers',
  description: 'Workers management page',
};

function page() {
  return (
    <div>
      <h1>Workers Management</h1>
      <WorkersTable />
    </div>
  );
}

export default page;
