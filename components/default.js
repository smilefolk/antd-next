import stylesheet from 'antd/dist/antd.min.css'

export default ({children}) => (
  <main>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    {children}
  </main>
)