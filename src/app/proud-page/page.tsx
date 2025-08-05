import { Layout } from "@/app/components/Layout/Layout";
import React from 'react';

const ProudPage = () => {
  return (
    <Layout>
      <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-blue-800 to-slate-700 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8">Proud Page</h1>
          <p className="text-xl">Content for this page will be added later.</p>
        </div>
      </section>
    </Layout>
  );
};

export default ProudPage;
