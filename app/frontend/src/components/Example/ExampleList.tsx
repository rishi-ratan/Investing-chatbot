import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are the most advanced neural networks in today's world?",
        value: "What are the most advanced neural networks in today's world?"
    },
    { text: "What are the 5 takeaways from GTC?", value: "What are the 5 takeaways from GTC?" },
    { text: "What is the new computer?", value: "What is the new computer?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
