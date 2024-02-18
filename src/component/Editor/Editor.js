import React, { useEffect, useState } from 'react'

import styles from './Editor.module.css'
import InputControl from '../inputControl/InputControl';
import { X } from 'react-feather';

function Editor(props) {
    const sections = props.sections;
    const information = props.information;

    const [activeSectionKey,setActiveSectionKey] = useState(Object.keys(sections)[0]);

    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]  //this will select basic info by default
    )

    const [sectionTitle,setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    )

    const workExpBody = (
    <div className={styles.detail} >
        <div className={styles.row} >
            <InputControl
            label="Title"
            placeholder="Enter title eg. Fronted Developer"
            />
            <InputControl
            label="Company Name"
            placeholder="Enter Company Name"
            />
        </div>

        <div className={styles.row}>
            <InputControl
            label="Certificate Link"
            placeholder="Enter Certficate Link"
            />
            <InputControl
            label="Enter location eg. Remote"
            />
        </div>

        <div className={styles.row}>
            <InputControl
            label="start Date"
            type="date"
            placeholder="Enter start date of work"
            />
            <InputControl
            type="date"
            label="End Date"
            placeholder="Enter end date of work"
            />
        </div>

        <div className={styles.column}>
            <label>Enter Work Description</label>
            <InputControl placeholder="Line 1" />
            <InputControl placeholder="Line 2" />
            <InputControl placeholder="Line 3" />
        </div>

    </div>)

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                label="Title"
                placeholder="Enter Title"
                />
            </div>
            <InputControl
            label="Overview"
            placeholder="Enter basic overview of the project"
            />
            <div className={styles.row}>
            <InputControl
            label="Deployed Link"
            placeholder="Enter Link of the project"
            />    

            <InputControl
            label='Github Link'
            placeholder='Enter Github Link of project'
            />
            </div>       
            <div className={styles.column}>
                <label>Enter project Description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
                
                
            </div>     

        </div>
    ); 

    const educationBody = (
        <div className={styles.deatil}>
            <div className={styles.row}>
                <InputControl label="Title" 
                placeholder="Enter Title of education"
                />
            </div>
            <InputControl
            label="College/School Name"
            placeholder="Enter name of your college/school"
            />
            <div className={styles.row}>
            <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter Start date of this education"
            />
            <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end datet of this education" 
            />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                label="Name"
                placeholder="Enter your Full Name"
                />
                <InputControl
                label="Title"
                placeholder="Enter your job position"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Linkedin Link"
                placeholder="Enter your linkedin profile Link"
                />

                <InputControl
                label="Github Link"
                placeholder="Enter your github profile Link"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Email"
                placeholder="Enter your email"
                />
                <InputControl
                label="Enter Phone"
                placeholder="Enter your phone Number"
                />

            </div>

        </div>
    );

    const achievementsBody = (
        <div className={styles.deatil}>

            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4"/>
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.deatil}>
            <InputControl
            label="Summary"
            placeholder="Enter your objective/summary"
            />
        </div>
    );

    const otherBody = (
        <div className={styles.deatil}>
            <InputControl
            label="Summary"
            placeholder="Enter something about yourself"
            />
        </div>
    );
    const generateBody = () =>{
        switch(sections[activeSectionKey])
        {
            case sections.basicInfo:
                return basicInfoBody;

            case sections.workExp:
                return workExpBody;
            
            case sections.project:
                return projectBody;

            case sections.education:
                return educationBody;
            
            case sections.achievements:
                return achievementsBody;
            
            case sections.summary:
                return summaryBody;
            
            case sections.other:
                return otherBody;

            default :return null
  
        }

    };

    useEffect(()=>{
        setActiveInformation(information[sections[activeSectionKey]])
        setSectionTitle(sections[activeSectionKey])
    },[activeSectionKey])

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {Object.keys(sections).map((key) => (
            <div 
            className={`${styles.section}  ${activeSectionKey===key ? styles.active :""}`} 
            key={key}
            onClick={() => setActiveSectionKey(key)}
            >
              {sections[key]}
            </div>
          ))}
        </div>
        <div className={styles.body}>
    <InputControl label="Title" placeholder='Enter section Title'    
    value={sectionTitle}
    onchange = {(e)=>{
        setSectionTitle(e.target.value)
    }}
    />
    <div className={styles.chips}>
        {activeInformation?.details ? activeInformation?.details?.map((item, index) => {
            return (
                <div className={styles.chip} key={item.title + index}>
                    <p>{sections[activeSectionKey]} {index + 1}</p>
                    <X/>
                </div>
            );
        }) : ""}
    </div>
    {generateBody()}
</div>

      </div>
    );
}

export default Editor
