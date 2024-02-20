import React from 'react';

const Sub = () => {
    return (
        <div>
            <hr/>
            <h4>Sub 입니다.{console.log('Sub(자식) 렌더링 됐다!')}</h4>
        </div>
    );
};

export default Sub;