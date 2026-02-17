import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}



// export default function RootLayout({ children }) {
//   return (
//     <html lang="uz">
//       <body>
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
