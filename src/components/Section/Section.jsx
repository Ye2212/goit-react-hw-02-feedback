import { Component } from "react";
import propTypes from 'prop-types';
import { StatisticSection } from "./Section.styled";

export class Section extends Component {
    render (){
        const { title, children } = this.props;
        return (
            <StatisticSection>
                <h1>{title}</h1>
                {children}
            </StatisticSection>
        )
    }
}

StatisticSection.prototype = {
title: propTypes.string,
children: propTypes.element,
}

export default Section;