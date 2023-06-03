import '@/styles/globals.css'
export const metadata = {
  title: 'HooBank',
  description: 'Hoobank is Landing Page',
}

const RootLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;