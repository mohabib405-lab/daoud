"use client"
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type AdvanceCountUpProps = {
    ending?: number;
    durations?: number;
};

const AdvanceCountUp: React.FC<AdvanceCountUpProps> = ({
    ending = 32,
    durations = 3,
}) => {
    const [animationRef, animationInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [istrue, setIstrue] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setIstrue(false), 0);
        return () => clearTimeout(timer);
    }, [animationInView]);

    if (!istrue) {
        return (
            <span ref={animationRef}>
                {animationInView
                    &&
                    <CountUp
                        start={0}
                        end={ending}
                        duration={durations}
                        separator=","
                    />
                }
            </span>
        );
    }

    return null;
};

export default AdvanceCountUp;
