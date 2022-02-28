let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
    screenSharingActive: false,
}

export const setSocketId = id => {
    state = {...state, socketId: id}
}

export const setLocalStream = stream => {
    state = {...state, localStream: stream}
}

export const setRemoteStream = stream => {
    state = {...state, remoteStream: stream}
}

export const setScreenSharingStream = stream => {
    state = {...state, screenSharingStream: stream}
}

export const setAllowConncetionFromStrangers = isAllowed => {
    state = {...state, allowConnectionsFromStrangers: isAllowed}
}

export const setScreenSharingActive = isActive => {
    state = {...state, screenSharingActive: isActive}
}

export const getState = () => state
