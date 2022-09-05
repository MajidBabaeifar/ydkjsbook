import ch1_File from '../ch1.md'
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';

const Ch1 = () => {
    const [ch1, setCh1] = useState(null)
    useEffect(() => {
        fetch(ch1_File)
            .then(response => response.text())
            .then(result => setCh1(result));
    }, [])
    return (
        <div>
            {ch1 && <Markdown>{ch1}</Markdown>}
        </div>
    );
}

export default Ch1;