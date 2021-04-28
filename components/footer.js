import React from 'react'



const items = [
    {title : "À propos", text1 : "Fonctionnement d'Airbnb" , link1 : "https://www.airbnb.fr/d/howairbnbworks", text2 : "Newsroom" , link2 : "https://www.airbnb.fr/press/news",text3 : "Investisseurs" , link3 : "https://investors.airbnb.com/home/default.aspx", text4 : "Airbnb Plus" , link4 : "https://www.airbnb.fr/plus",text5 : "Airbnb Luxe" , link5 : "https://www.airbnb.fr/luxury",text6 : "HotelTonight" , link6 : "https://www.hoteltonight.com/?utm_source_name=Airbnb&utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer",text7 : "Airbnb for Work" , link7 : "https://www.airbnb.fr/work?s=footer",text8 : "C'est possible, grâce aux hôtes" , link8 : "https://www.airbnb.fr/d/video-stories-hub",text9 : "Carrières" , link9 : "https://www.airbnb.fr/careers",text10 : "Lettre des fondateurs" , link10 : "https://news.airbnb.com/what-makes-airbnb-airbnb?_ga=2.7372859.824692679.1619446389-126391276.1619446389", },
    {title : "Communauté", text1: "Diversité et intégration" , link1 : "https://www.airbnb.fr/diversity", text2 : "Accessibilité" , link2 : "https://www.airbnb.fr/accessibility",text3 : "Partenaires Airbnb" , link3 : "https://www.airbnb.fr/associates?from=footer", text4 : "Logements d'urgence" , link4 : "https://www.airbnb.fr/d/covid19relief",text5 : "Parrainage de voyageurs" , link5 : "https://www.airbnb.fr/invite?r=6",text6 : "Airbnb.org" , link6 : "https://www.airbnb.org/?locale=fr&_ga=2.249030414.824692679.1619446389-126391276.1619446389",text7 : "" , link7 : "",text8 : "" , link8 : "",text9 : "" , link9 : "",text10 : "" , link10 : "", },
    {title : "Hôte", text1 : "Héberger des voyageurs" , link1 : "https://www.airbnb.fr/host/homes?from_footer=1", text2 : "Organiser une expérience en ligne" , link2 : "Centre d'aide",text3 : "Organiser une expérience" , link3 : "https://www.airbnb.fr/host/experiences", text4 : "Accueil responsable" , link4 : "https://www.airbnb.fr/help/responsible-hosting",text5 : "Centre de ressources" , link5 : "https://www.airbnb.fr/resources",text6 : "Community Center" , link6 : "https://www.airbnb.fr/help/community?s=footer",text7 : "" , lin7 : "",text8 : "" , link8 : "",text9 : "" , link9 : "",text10 : "" , link10 : "", },
    {title : "Assistance", text1 : "Nos mesures face au COVID-19" , link1 : "https://www.airbnb.fr/d/covidsafety", text2 : "Centre d'aide" , link2 : "https://www.airbnb.fr/help?from=footer",text3 : "Options d'annulation" , link3 : "https://www.airbnb.fr/help/article/2701/politique-relative-aux-cas-de-force-majeure-et-coronavirus-covid19", text4 : "Service d'aide aux voisins" , link4 : "https://www.airbnb.fr/neighbors",text5 : "Confiance et sécurité" , link5 : "https://www.airbnb.fr/trust",text6 : "" , link6 : "",text7 : "" , lin7 : "",text8 : "" , link8 : "",text9 : "" , link9 : "",text10 : "" , link10 : "", }
 ]

 function Items(props){
    return(
     
        <div className="mr-5">
        <h6 className="mb-3"><strong>{props.title}</strong></h6>
        <a href={props.link1} target="_blank"><p className="footer-link">{props.text1}</p></a>
        <a href={props.link2} target="_blank"><p className="footer-link">{props.text2}</p></a>
        <a href={props.link3} target="_blank"><p className="footer-link">{props.text3}</p></a>
        <a href={props.link4} target="_blank"><p className="footer-link">{props.text4}</p></a>
        <a href={props.link5} target="_blank"><p className="footer-link">{props.text5}</p></a>
        <a href={props.link6} target="_blank"><p className="footer-link">{props.text6}</p></a>
        <a href={props.link7} target="_blank"><p className="footer-link">{props.text7}</p></a>
        <a href={props.link8} target="_blank"><p className="footer-link">{props.text8}</p></a>
        <a href={props.link9} target="_blank"><p className="footer-link">{props.text9}</p></a>
        <a href={props.link10} target="_blank"><p className="footer-link">{props.text10}</p></a> 
    </div> 
   
    )
 }
 
 function Footer() {
    return(
     <div className="container-fluid">
       <div className="footerS">
          {items.map(element =>
            <div>
               <Items title = {element.title} text1 = {element.text1} link1 = {element.link1} text2 = {element.text2} link2 = {element.link2} text3 = {element.text3} link3 = {element.link3} text4 = {element.text4} link4 = {element.link4} text5 = {element.text5} link5 = {element.link5} text6 = {element.text6} link6 = {element.link6} text7 = {element.text7} link7 = {element.link7} text8 = {element.text8} link8 = {element.link8} text9 = {element.text9} link9 = {element.link9} text10 = {element.text10} link10 = {element.link10}/>     
            </div>
          )}
       </div>
     </div>
      
    )
 }


export default Footer
