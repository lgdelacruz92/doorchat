const ChatWindow = (args) => {
    const { messages } = args
    return (
        <div>
            { messages.map(m => {
                return <div><span>{m.user}</span><span>{m.message}</span></div>
            })}
        </div>
    );
}

export default ChatWindow;