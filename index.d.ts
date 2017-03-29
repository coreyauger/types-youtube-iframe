

//https://developers.google.com/youtube/
declare namespace YT{


    export interface Event {
    readonly target?:  Player;
    readonly data: any;
    }

    export interface PlayerEvents {
        onReady?: (e: Event) => void
        onStateChange?: (e: Event) => void
        onError?: (e: Event) => void
    }

    export interface VideoIdStartOptions {
        videoId?: string;
        startSeconds?: string
        endSeconds?: number
        suggestedQuality?: string
    }

    export interface PlayerVars {
        playsinline?: number
    }

    export interface PlayerOptions {
        height:string
        width:string
        videoId:string
        events:PlayerEvents
        playerVars:PlayerVars
    }

    export class Player  {
        constructor(divId:string, settings:PlayerOptions)

        //https://developers.google.com/youtube/iframe_api_reference?hl=en#Playback_controls
        // queueing
        loadVideoById(videoId: string, startSeconds: number, suggestedQuality: string): void
        loadVideoById(opts: VideoIdStartOptions):void
        cueVideoById(videoId: string,startSeconds: number,suggestedQuality: string):void
        cueVideoById(opts:VideoIdStartOptions): void
        // TODO: obj syntax
        cueVideoByUrl(mediaContentUrl: string,startSeconds: number,suggestedQuality: string): void
        loadVideoByUrl(mediaContentUrl: string,startSeconds: number,suggestedQuality: string): void
        // TODO: ...

        // controls
        playVideo(): void
        pauseVideo(): void
        stopVideo(): void
        seekTo(seconds: number, allowSeekAhead: boolean): void
        clearVideo(): void
        nextVideo(): void
        previousVideo(): void
        playVideoAt(index: number): void
        mute(): void
        unMute(): void
        isMuted(): boolean
        setVolume(vol: number): void
        getVolume():number
        setSize(w: number, h: number): void
        getPlaybackRate(): number
        setPlaybackRate(rate: number): void
        getAvailablePlaybackRates(): number[]
        setLoop(loop: boolean): void
        setShuffle(shufflePlaylist: boolean): void
        getVideoLoadedFraction(): number

        // -1 – unstarted
        // 0 – ended
        // 1 – playing
        // 2 – paused
        // 3 – buffering
        // 5 – video cued
        getPlayerState(): State

        getCurrentTime(): number

        // values are highres, hd1080, hd720, large, medium and small. It will also return undefined
        getPlaybackQuality(): string
        setPlaybackQuality(quality: string): void
        getAvailableQualityLevels(): string[]
        getDuration(): number
        getVideoUrl(): string
        getVideoEmbedCode(): string
        getPlaylist(): string[]
        getPlaylistIndex(): number
        addEventListener(event: string, functionName: string): void
        removeEventListener(event: string, functionName: string): void

        // dom
        getIframe():HTMLIFrameElement
        destroy():void

    }

    export enum State{
        UNSTARTED = -1,
        ENDED = 0,
        PLAYING = 1,
        PAUSED = 2,
        BUFFERING = 3,
        CUED = 5,
    }



}