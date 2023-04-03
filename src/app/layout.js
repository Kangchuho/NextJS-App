import './globals.css';

export const metadata = {
  title: '환영합니다.ㅋ',
  description: '좋아요~ ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='kr'>
      <body>{children}</body>
    </html>
  );
}
