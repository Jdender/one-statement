((<
    React extends typeof import('react'),
    ReactDom extends typeof import('react-dom'),
    SocketIO extends typeof import('socket.io-client'),
>(
    { createElement, useState, useEffect, Fragment }: React = require('react'),
    { render }: ReactDom = require('react-dom'),
    { connect }: SocketIO = require('socket.io-client'),

    socket = connect('localhost:8080'),

    Input: React.FC = () => ((

        [content, setContent] = useState(''),

    ) => <input

        value={content}
        onChange={e => setContent(e.target.value)}

        onKeyPress={e => 
            e.key === 'Enter' && (

                socket.emit('message', content),

                setContent('')
            )}
    />)(),

    Output: React.FC = () => ((

        [messages, setMessages] = useState([] as string[]),
        
    ) => (

        useEffect(() => (

            socket.on('message', (msg: string) => 
                setMessages(msgs => [msg, ...msgs]),
            ),

            () => void socket.off('message')
        )),

        <ul
            children={messages.map((str, i) =>
                <li key={i}>{str}</li>
            )}
        />
    ))(),

    App: React.FC = () => <Fragment>

        <Input/>
        <Output/>

    </Fragment>,
) =>
    render(<App/>, document.getElementById('app'))
)());
