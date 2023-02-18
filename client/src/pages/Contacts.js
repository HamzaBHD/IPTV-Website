import TopPage from '../components/TopPage'
import '../pages/Contacts.css'

const Contacts = () => {
  return (
    <div className='wrapper'>
      <div className='contact-page'>
        <TopPage
          topPageClass='top-page-contacts'
          title='Contact Us.'
          paragraph='We provide 24/7 customer support to ensure that all of your questions are answered quickly and accurately. 
                                Contact us today for any queries regarding our services. 
                                We look forward to hearing from you!'
          isTrue={false}
          backgoundClass='background-full-black'
          contentClass='top-page-content'
          aboutPage={false}
          contactPage={true}
          primary='Go Home'
          secondary='Browse product'
        />
      </div>
    </div>
  )
}

export default Contacts
