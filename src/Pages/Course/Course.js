import {useState} from 'react';
import './Course.css';
import Lectures from './Lectures';
import Price from './Price';

const Course = () => {

  const [lectuers, setLectuers] = useState([
    {title: 'Present', body:'This lectuer is about present verbs', time:10, id:1},
    {title: 'Past', body:'This lectuer is about past verbs', time:13, id:2},
    {title: 'Past particeble', body:'This lectuer is about pp verbs', time:20, id:3}
  ])

  const lectuerList = lectuers.map(lectuer =>(
    <Lectures key={lectuer.id} lectuers={lectuer}/>
 ))

  return (
    <>
    <Price />

    {lectuerList}
     
    </>
  )
};

export default Course;
