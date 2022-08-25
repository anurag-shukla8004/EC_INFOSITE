import styles from '../../styles/post-body.module.css'

export default function PostBody({ content }) {

  const str  = 'data In the modern world of online business, the importance of CRM has become clearer for businesses of all sizes. Of course, interactions between a company and its customers have always been crucial in determining success or failure. But in an increasingly internet-oriented world, there are both more interactions and more ways to handle them. As a result, effective CRM plays an even greater role in differentiating one business from the next.In some cases though, there are entire industries for which effective CRM is particularly helpful (or in some cases is glaringly absent). In these cases, improvement in communication, personalization, and other aspects of customer relations can make a significant difference <b>1.) Film & TV Streaming</b>This first example may surprise some readers, particularly given that the successful use of company data by Netflix has been highlighted as a positive example here in the past. But just because an industry is already using CRM (and using it effectively) doesn’t mean there isn’t improvement. And there are two respects in which the film and TV streaming industry could stand to get even better on this front.'
  return (
    <div className="max-w-2xl mx-auto">
      <pre 
      style={{fontFamily:'jost', whiteSpace: 'pre-wrap'
    }}
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}