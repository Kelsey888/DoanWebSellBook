import { Checkbox, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Select, Rate } from 'antd';
export const Filter = (props) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    let optionAuthor = props.author.map((item) => {
        return (
            {
                value: item.id,
                label: item.name,
            }
        )
    })
    let optionBeforePrice = ['0', '10000', '50000', '100000'].map((item) => {
        return (
            {
                value: item,
                label: item,
            }
        )
    })
    let optionAfterPrice = ["10000", "200000", "500000", "> 500000"].map((item) => {
        return (
            {
                value: item,
                label: item,
            }
        )
    })
    let optionSupplier = props.supplier.map((item) => {
        return (
            {
                value: item.id,
                label: item.name,
            }
        )
    })
    console.log('tg', optionAuthor)


    let genre = (item) => {
        return (
            <>
                <Col span={4}>
                    <Checkbox value={item.id}>{item.name}</Checkbox>
                </Col>
            </>
        );
    }
    console.log(props.genre)
    return (
        <>
            <div className='container mt-3 ' >
                <div className='name-filter'><h3> Bộ lọc </h3></div>
                <div className='mb-2 ' >
                    <Row>
                        {props.genre !== null ? props.genre.map(item => { return genre(item); }) : null}
                    </Row>
                </div>

                <div style={{ display: 'inline-block' }}>
                    <div className='name-filter'> Tác giả <div style={{ display: "inline-block" }}>  <Select
                        defaultValue=""
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={optionAuthor}
                    /></div></div>


                </div>
                <div style={{ display: 'inline-block', marginLeft: '20px' }}>
                    <div className='name-filter'> Nhà cung cấp <div style={{ display: "inline-block" }}><Select
                        defaultValue=""
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={optionSupplier}
                    /></div></div>


                </div>
                <div style={{ display: 'inline-block', marginLeft: '20px' }}>
                    <div className='name-filter'>Giá <div style={{ display: "inline-block" }}> <Select
                        defaultValue="0"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={optionBeforePrice}
                    />
                        -
                        <Select
                            defaultValue="0"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={optionAfterPrice}
                        /></div></div>

                </div>
                <div style={{ display: 'inline-block', marginLeft: '20px' }}>
                    <div className='name-filter'>Đánh giá <div style={{ display: "inline-block" }}> <Rate /></div></div>
                </div>

                <div style={{ display: "inline-block", marginLeft: "50px" }}>
                    <Button icon={<SearchOutlined />}>Tìm</Button>
                </div>

            </div >
        </>
    );
}
