import { useDyteClient, DyteProvider } from "@dytesdk/react-web-core"
import {DyteMeeting} from "@dytesdk/react-ui-kit";
import { useEffect } from "react";

export default function JoinMeeting() {
    const [meeting, initMeeting] = useDyteClient();
    useEffect(() => {
        async function initializeMeeting(){
            const meetingToken = await sessionStorage.getItem("meetingToken");
            initMeeting({
                authToken: meetingToken,
                defaults: {
                    audio: false,
                    video: false,
                }
            })    
        }
        initializeMeeting()
    }, [])
    return (
        <DyteProvider value={meeting}>
            <div style={{height: "100vh", width: "100vw"}}>
                <DyteMeeting meeting={meeting} mode={"fill"}/>
            </div>
        </DyteProvider>
      );
}
