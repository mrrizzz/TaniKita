import React from 'react';
import Layout from '../../components/sidebar/layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}