import React, { useState, useEffect, useRef } from "react";
import { DatePicker, InputItem, Button,Flex,WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import styled from "styled-components";
import { connect } from "react-redux";
import { updateCreditCard } from "../../../../../actions/entities/creditCard/index.action";

const CreditCardContainer = styled.section `
position: absolute;
    bottom: 0;
    height: 200px;
    padding:10px;
    .am-list-item{
        width:100%
    }
    .cvc{
        width: 80%;
        float: right;
    }
    .expiry{
        width: 80%;
        float: right;
    }
    .submit{
        width: 100%;
    }

`

const CreditCard = (props) => {
    const { entities, updateCreditCard } = props;
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [expiry, setExpiry] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if(cardNumber){
            const bank = /^\d+$/;
            let errorMessage = '';
            if(!bank.test(cardNumber)){
                errorMessage = 'Credit Card Number invalid.';
            }else{
                errorMessage = '';
            }
            setErrorMessage(errorMessage);
        }
    }, [cardNumber]);

    useEffect(() => {
        if(cvc){
            const number = /^\d+$/;
            let errorMessage = '';
            if(!number.test(cvc) || cvc.length != 3){
                errorMessage = 'CVC invalid.';
            }else{
                errorMessage = '';
            }
            setErrorMessage(errorMessage);
        }
    }, [cvc]);

    useEffect(() => {
        if(expiry){
            const number = /^\d+$/;
            let errorMessage = '';
            if(!number.test(expiry) || expiry.length != 4 || parseInt(expiry.slice(0,2)) <= 0 || parseInt(expiry.slice(0,2)) > 12 ){
                errorMessage = 'expiry invalid.';
            }else{
                errorMessage = '';
            }
            setErrorMessage(errorMessage);
        }
    }, [expiry]);

    return (
        <CreditCardContainer>
            <Flex>
                {errorMessage}
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
                <InputItem
                    className="cardNo"
                    type="number"
                    maxLength={30}
                    placeholder={'Credit Cart Number'}
                    onChange={(value) => setCardNumber(value)}
                ></InputItem>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
                <Flex.Item></Flex.Item>
                <Flex.Item>
                    <InputItem className="cvc"
                        type="number"
                        placeholder="CVC"
                         maxLength={3}
                        onChange={(value) => setCVC(value)}
                    />
                </Flex.Item>
                <Flex.Item>
                    <InputItem className="expiry"
                        type="number"
                        placeholder="expiry"
                        maxLength={4}
                        onChange={(value) => setExpiry(value)}
                    />
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
                <Button className="submit" disabled={errorMessage || !cardNumber || !cvc || !expiry} onClick={()=>updateCreditCard({cardNumber, cvc, expiry})}>Submit</Button>
            </Flex>
        </CreditCardContainer>
    );

}

const CreditCardWrapper = createForm()(CreditCard);


const mapStateToProps = (state) => ({
    entities: state['entities'],
});

const mapDispatchToProps = (dispatch) => ({
    updateCreditCard: (keyValue) => dispatch(updateCreditCard(keyValue)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreditCardWrapper);
