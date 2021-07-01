import React from 'react';
import {useState} from 'react';
import styles from './homeservices.module.css';
import cn from 'classnames';

const Home_Services = () => {
    const [ortho, setOrtho] = useState(false);

    const ToggleOnClick = (active) => {
        if (active === 'skin') {
            setOrtho(false)
        } else {
            setOrtho(true)
        }
    }

    const Services = ({active}) => {

        let elements = [];
        let info_elements = [];
        let url;

        if (active === true) {
            elements = ['Fracture Management', 'POP Treatment']
            info_elements = ["", ""]
            url = '/Ortho.svg'
        } else {
            elements = ['Acne (Pimple) Treatment', 'Acne Scar Treatment', 'Chemical Peel', 'Microdermabrasion', 'Skin polishing', 'Microneedling (Derma roller)', 'Skin rejuvenation', 'Hair Removal (Laser)', 'Tattoo removal', 'Scar (Laser)', 'Hair Growth (PRP)', 'Ear Lobe Repair', 'Day Care Surgeries', 'Nail Treatment']
            info_elements = ['Acne (Pimples is the most common debilitation condition that affects the psychological aspect of teens and younger age groups. Many day care procedures like chemical peel, microdermabrasion (skin polishing), removal of black/white heads, light therapy will help in regaining their confidence level.',
                        'When pimples are not treated early, scars will appear. To reduce the scars, procedures like chemical peels (pigment marks), microdermabrasion, microneedling, Lasers, MNRF and simple surgical procedures like suscison, punch grafting or elevation will help in improvement',
                        'Peels is the controlled removal of surface dead cells. It can be done for party peels (instant glow), therapeutic peels for acne, pigmentation, deep peels for sun tanning, skin ageing ,minimal wrinkles and to clear dullness',
                        'This is a painless office procedure for removal of dead skin layer under controlled conditions. This can be done for smooth skin tone, to reduce superficial wrinkles and for facial rejunevation',
                        '',
                        'This induces production of new collagen, which imroves skin tone. This is done by penetrating needles through the skin to a specific length.',
                        'Every one needs a rejuvenated and healthy skin. To improve the color and texture, various procedures like peels, RF (heat), Botox and fillers are available. This has to be combined with healthy food habits, proper exercise and normal sleep.',
                        'Hair removal using laser is used to remove hair in abnormal regions and unmanagable hair.',
                        'Tattoo can be removed by nd-YAG lasers. Similarly, pigmented moles or sunspots can be also removed. Always tattoo removal costs more than getting a tattoo. So, Thik before getting a tattoo!!',
                        'Scar remodelling using laser (MNRF / CO2) are very useful to reduce the visible scars upto 70%',
                        "Newer modality of PRP treatment (Platelet Rich Plasma therapy) consists of seperating growth factors from the patient's blood and using it for theraputes purposes. PRP is useful for hair growth (controlling baldness), scar improvement, stretch mask reduction and facial rejuvenation(Under eye)",
                        "It can be repaired as a day care prodedure under injectable anesthesuia without prominent marks.",
                        "Removal of moles and skin tags can be removed as a day care surgery under injectable anasthesia.",
                        "For ingrown toenails, rough nails, under growth nails can be treated as a day care procedure."
                    ]
            url = '/skin_logo.svg'
        }

        const serviceinfocn = "body-light" + ' ' + styles.serviceinfo

        return(
            <div className={styles.servicegallery}>
                {elements.map((value,index) => {
                    return (<div className={styles.servicecard}>
                                <div id="service-img"><img src={url} alt="not available" /></div>
                                <p className="body">{value}</p>
                                <p className={serviceinfocn}>{info_elements[index]}</p>
                            </div>)
                })}
            </div>
        );
    };

    const DocInfo = ({active}) => {

        let name;
        let designation;
        let src;

        if (active === true) {
            name = "Dr.Jenson Isaac";
            designation = "Orthopedic Surgeon";
            src = "/Dr.Jenson.webp";
        } else {
            name = "Dr.Dhanalakshmi Kathirvel";
            designation = "Dermatologist";
            src = "/Dr.Dhanalakshmi.webp";
        }

        return(
            <div>
                <div id="doc-img"><img className="docs-img" src={src} alt="not available" /></div>
                <p className="h1" id="doc-name">{name}</p>
                <p className="h4-light" id="doc-info">{designation}</p>
            </div>
        );
    };
    
    const orthoclassnames = cn({
        ["active-logo"]: ortho === true,
        [""]: ortho === false
    }, "toggle-logo");

    const skinclassnames = cn({
        ["active-logo"]: ortho === false,
        [""]: ortho === true
    }, "toggle-logo");

    return (
        <section className="services">
            <div className="doctor-toggle">
                <div className={skinclassnames} onClick={() => ToggleOnClick("skin")}><div className="skin-toggle-logo"><img src="/skin_logo.svg" alt="not available" /></div></div>
                <div className={orthoclassnames} onClick={() => ToggleOnClick("ortho")}><div className="ortho-toggle-logo"><img src="/Ortho.svg" alt="not available" /></div></div>
            </div>
            <DocInfo active={ortho} />
            <Services active={ortho} />
        </section>
    );
};

export default Home_Services;