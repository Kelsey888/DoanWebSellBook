import { Divider, Steps } from 'antd';
export const Step = () => {
    return (
        <>
            <div className='container'>
                <Steps
                    progressDot
                    current={2}
                    direction="vertical"
                    items={[
                        {
                            title: 'Finished',
                            description: 'This is a description. This is a description.',
                        },
                        {
                            title: 'Finished',
                            description: 'This is a description. This is a description.',
                        },
                        {
                            title: 'In Progress',
                            description: 'This is a description. This is a description.',
                        },
                        {
                            title: 'Waiting',
                            description: 'This is a description.',
                        },
                        {
                            title: 'Waiting',
                            description: 'This is a description.',
                        },
                    ]}
                />
            </div>
        </>
    );
}