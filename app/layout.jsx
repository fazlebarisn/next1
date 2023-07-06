import '@styles/globals.css';
// import { Children } from 'react/cjs/react.production.min';
export const metadata = {
    titile: "CodeAstrology",
    description: "Web development company",
}

const RootLayout = ({Children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>

            </div>
            <main className='app'>
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout