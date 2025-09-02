import React, { Component, memo } from 'react';

type IUser = {
    name: string;
    age: number;
};

type IProps = {
    user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component with custom comparison (user object may change reference)
const SecondComponent = memo(
    ({ user: { name, age } }: IProps) => (
        <div>
            my name is {name}, my age is {age}
        </div>
    ),
    (prevProps, nextProps) =>
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age
);

// class component
class ThirdComponent extends React.PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

// class component
class FourthComponent extends React.PureComponent<IProps> {
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        );
    }
}

export { FirstComponent, SecondComponent, ThirdComponent, FourthComponent };
