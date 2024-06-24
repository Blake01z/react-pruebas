import React, { useMemo } from 'react';

interface Item {
    name: string;
}

interface ExpensiveComponentProps {
    data: Item[];
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ data }) => {
    const processData = (data: Item[]): Item[] => {
        return data.map((item: Item) => ({ ...item, processed: true }));
    };

    const processedData = useMemo(() => processData(data), [data]);

    return (
        <div>
            {processedData.map((item: Item, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    );
};

export default ExpensiveComponent;
