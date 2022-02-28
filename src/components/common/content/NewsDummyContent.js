import React from 'react'
import styles from './content.module.css'

function NewsDummyContent() {
    
    return (
        <p className={styles['content']}>Important to note that NewsApi, which I use for this project, doesn't allow news content for development purposes. So the paragraph below is with some dummy data instead of the original content.<br/>
        <br/>
            
            Why do some teams have 'gills' on their sidepods, why have some teams chosen pullrod over pushrod suspension, and why do the 2022 F1 cars look so different? Mark Hughes investigates after AlphaTauri, Williams, Ferrari and Mercedes unveiled their cars over the second week of 2022 Formula 1 car launches - with technical imagery from Giorgio Piola.<br/>
        <br/>
As more of the 2022 cars have broken cover in the last week - either in official launches or, in the case of Red Bull and Alfa Romeo, out on the track for shakedown runs - so a clearer picture is emerging of what are the technical trends and where the points of differences lie.<br/>
<br/>
The most visually striking point of divergence is probably that of the method of bodywork cooling used. Both Aston Martin and Ferrari have committed heavily to gill cooling on the upper surface of their sidepods - something allowed for the first time since it was banned in 2009 - while others have directed it through tunnels to exit from big outlets at the back of the car.
The hot air, which has just been through the radiators, is aerodynamically not useful. Its energy has been spent and the contrast in temperature with the ambient air creates a very disruptive flow. This is why neither the Ferrari nor Aston Martin feature the heavy downward ramp of some other cars where the downward inclination is used to accelerate the airflow to the space between the rear wheels and the diffuser exits of the venturi tunnels. Instead, they have heavily undercut sidepods to do that job, leaving the top surface to vent the hot air in a relatively harmless area.<br/>
<br/>
In the cars with conventional cooling exits at the rear - usually around either side of the exhaust tailpipe - the air is being directed around the beam wing.<br/>
Another key point of divergence is that of front suspension packaging. While most teams have retained the long-established convention of pushrod-actuated rockers whereby a rod from the bottom of the wheelhub is angled upwards to inboard rockers mounted higher, both McLaren and Red Bull have switched to pullrod operation, where the rod runs from the top of the wheelhub to low-mounted rockers inboard.</p>
    )
}

export default NewsDummyContent