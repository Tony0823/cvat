// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd/lib/grid';
import Button from 'antd/lib/button';
import Text from 'antd/lib/typography/Text';

type Props = {
    installedAutoAnnotation: boolean;
} & RouteComponentProps;

function TopBarComponent(props: Props): JSX.Element {
    const {
        installedAutoAnnotation,
        history,
    } = props;

    return (
        <Row type='flex' justify='center' align='middle'>
            <Col md={11} lg={9} xl={8} xxl={7}>
                <Text className='cvat-title'>Models</Text>
            </Col>
        </Row>
    );
}

export default withRouter(TopBarComponent);
