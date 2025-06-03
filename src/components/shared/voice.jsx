import { useEffect, useState } from 'react'
import { useWorkingMode } from '../../assets/customHooks/useWorkingMode';
import { VoiceIcon } from '../icons/voiceIcon';

export const Voice = ({ numPC, numTablet, numMobile, color }) => {
    const workingMode = useWorkingMode('Mobile')
    const [numVoice, setNumVoice] = useState(2)
    
    useEffect(() => {
        if (workingMode === "PC") {
            setNumVoice(Number(numPC))
        } else if (workingMode === "Tablet") {
            setNumVoice(Number(numTablet))
        } else {
            setNumVoice(Number(numMobile))
        }
    }, [workingMode, numPC, numTablet, numMobile]);

    return (
        <div className="flex flex-row items-center justify-around md:justify-center">
            {Array.from({ length: numVoice}, (_, i) => (
                <VoiceIcon key={i} color={color} />
            ))}
        </div>
    )
}
