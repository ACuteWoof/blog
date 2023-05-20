import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="acutewoof" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        <footer className='p-4 md:flex md:items-center md:justify-between md:p-6 bg-white dark:bg-slate-900'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022-2023 ACuteWoof. All Rights Reserved.
          </span>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
