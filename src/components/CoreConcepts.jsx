import CoreConcept from './CoreConcept.jsx';
import { Core_Concepts } from '../data.js';

export default function CoreConcepts(){
    return (
        <section id = "core-concepts"> 
        <h2>Core Concepts</h2>
        <ul>
           {Core_Concepts.map((item)=>(
           <CoreConcept key={item.title} {...item} />
           ))}
        </ul>
        </section> 
    );
}