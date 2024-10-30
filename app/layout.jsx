import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Home Show Customer Quote',
  keyword:
    'quartz, granite, silestone, cambria, dekton, kitchen countertops, marble, engineered stone, corian, fabricator, countertop installer, countertop installation, quartz slabs, bath vanity, caesarstone, vadara quartz',
  description: 'Countertop Quote for Homeshow 2024',
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
