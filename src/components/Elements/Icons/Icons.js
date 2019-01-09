import React, {Component} from 'react'

class ArrowType1 extends Component {
    state = {
        hover: false
    }

    onMouseEnter = () => {
        this.setState({
            hover: true
        })
    }

    onMouseLeave = () => {
        this.setState({
            hover: false
        })
    }

    render() {
        return (
            <svg onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 width="34px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
                {
                    this.state.hover
                        ? <g>
                            <circle fill="#005A80" cx="16" cy="16" r="16"/>
                            <path fill="#FFFFFF" d="M23.27,15.811v-0.159v-0.013V15.48v-0.011l-0.181-0.148l-4.631-4.601c-0.375-0.369-0.992-0.364-1.361,0.01
                                c-0.365,0.37-0.373,1.078-0.008,1.449l2.959,3.09H9.654c-0.526,0-0.952,0.474-0.952,1c0,0.526,0.426,1,0.952,1h10.394l-2.976,2.814
                                c-0.375,0.369-0.379,0.891-0.01,1.265c0.369,0.375,0.972,0.339,1.346-0.03l0.011-0.031l4.665-4.611l0.185-0.158v-0.011V16.35
                                v-0.013v-0.159v-0.01l0.022-0.174L23.27,15.82V15.811z"/>
                        </g>
                        : <g>
                            <path fill='transparent' d="M25.9,6.101C23.363,3.565,19.869,2,16,2c-3.869,0-7.363,1.565-9.899,4.101C3.565,8.637,2.001,12.131,2,16
                            c0.001,3.869,1.565,7.363,4.101,9.899c2.537,2.535,6.03,4.1,9.899,4.101c3.869,0,7.363-1.565,9.9-4.101
                            c2.535-2.537,4.1-6.03,4.1-9.899C29.999,12.131,28.435,8.637,25.9,6.101z M23.27,16.169v0.01v0.159v0.013v0.159v0.011l-0.185,0.148
                            l-4.633,4.601l-0.027,0.011c-0.375,0.369-0.985,0.364-1.354-0.01c-0.369-0.375-0.368-0.815,0.006-1.184l2.972-2.814H9.654
                            c-0.526,0-0.952-0.474-0.952-1s0.426-1,0.952-1h10.394l-2.967-3.09c-0.364-0.371-0.364-1.022,0.001-1.392
                            c0.369-0.375,0.972-0.408,1.346-0.039l4.661,4.586l0.181,0.133v0.011v0.159v0.013v0.159v0.01l0.022,0.174L23.27,16.169z"/>
                            <path fill='#231F20' d="M16,0C7.163,0.001,0.001,7.163,0,16c0.001,8.837,7.163,15.999,16,16c8.837-0.001,15.999-7.163,16-16
                            C31.999,7.163,24.837,0.001,16,0z M16,30c-3.869,0-7.363-1.565-9.899-4.101C3.565,23.363,2.001,19.869,2,16
                            c0.001-3.869,1.565-7.363,4.101-9.899C8.637,3.565,12.131,2,16,2c3.869,0,7.363,1.565,9.9,4.101c2.535,2.537,4.1,6.03,4.1,9.899
                            c0,3.869-1.565,7.363-4.1,9.899C23.363,28.435,19.869,29.999,16,30z"/>
                            <path fill='#231F20' d="M23.27,15.811v-0.159v-0.013v-0.159v-0.011l-0.181-0.148l-4.631-4.601c-0.375-0.369-0.992-0.364-1.361,0.01
                            c-0.365,0.37-0.373,1.078-0.008,1.449l2.959,3.09H9.654c-0.526,0-0.952,0.474-0.952,1s0.426,1,0.952,1h10.394l-2.976,2.814
                            c-0.375,0.369-0.379,0.891-0.01,1.265c0.369,0.375,0.972,0.339,1.346-0.03l0.011-0.031l4.665-4.611l0.185-0.158v-0.011V16.35
                            v-0.013v-0.159v-0.01l0.022-0.174L23.27,15.82V15.811z"/>
                        </g>
                }
            </svg>
        )
    }
}

class ArrowType3 extends Component {
    state = {
        hover: false
    }

    onMouseEnter = () => {
        this.setState({
            hover: false
        })
    }

    onMouseLeave = () => {
        this.setState({
            hover: false
        })
    }

    render() {
        return (
            <svg onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 width="34px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
                {
                    this.state.hover
                        ? <g>
                            <circle fill="#005A80" cx="16" cy="16" r="16"/>
                            <path fill="#FFFFFF" d="M23.27,15.811v-0.159v-0.013V15.48v-0.011l-0.181-0.148l-4.631-4.601c-0.375-0.369-0.992-0.364-1.361,0.01
                                c-0.365,0.37-0.373,1.078-0.008,1.449l2.959,3.09H9.654c-0.526,0-0.952,0.474-0.952,1c0,0.526,0.426,1,0.952,1h10.394l-2.976,2.814
                                c-0.375,0.369-0.379,0.891-0.01,1.265c0.369,0.375,0.972,0.339,1.346-0.03l0.011-0.031l4.665-4.611l0.185-0.158v-0.011V16.35
                                v-0.013v-0.159v-0.01l0.022-0.174L23.27,15.82V15.811z"/>
                        </g>
                        : <g>
                            <path fill='transparent' d="M25.9,6.101C23.363,3.565,19.869,2,16,2c-3.869,0-7.363,1.565-9.899,4.101C3.565,8.637,2.001,12.131,2,16
                            c0.001,3.869,1.565,7.363,4.101,9.899c2.537,2.535,6.03,4.1,9.899,4.101c3.869,0,7.363-1.565,9.9-4.101
                            c2.535-2.537,4.1-6.03,4.1-9.899C29.999,12.131,28.435,8.637,25.9,6.101z M23.27,16.169v0.01v0.159v0.013v0.159v0.011l-0.185,0.148
                            l-4.633,4.601l-0.027,0.011c-0.375,0.369-0.985,0.364-1.354-0.01c-0.369-0.375-0.368-0.815,0.006-1.184l2.972-2.814H9.654
                            c-0.526,0-0.952-0.474-0.952-1s0.426-1,0.952-1h10.394l-2.967-3.09c-0.364-0.371-0.364-1.022,0.001-1.392
                            c0.369-0.375,0.972-0.408,1.346-0.039l4.661,4.586l0.181,0.133v0.011v0.159v0.013v0.159v0.01l0.022,0.174L23.27,16.169z"/>
                            <path fill='#FFFFFF' d="M16,0C7.163,0.001,0.001,7.163,0,16c0.001,8.837,7.163,15.999,16,16c8.837-0.001,15.999-7.163,16-16
                            C31.999,7.163,24.837,0.001,16,0z M16,30c-3.869,0-7.363-1.565-9.899-4.101C3.565,23.363,2.001,19.869,2,16
                            c0.001-3.869,1.565-7.363,4.101-9.899C8.637,3.565,12.131,2,16,2c3.869,0,7.363,1.565,9.9,4.101c2.535,2.537,4.1,6.03,4.1,9.899
                            c0,3.869-1.565,7.363-4.1,9.899C23.363,28.435,19.869,29.999,16,30z"/>
                            <path fill='#FFFFFF' d="M23.27,15.811v-0.159v-0.013v-0.159v-0.011l-0.181-0.148l-4.631-4.601c-0.375-0.369-0.992-0.364-1.361,0.01
                            c-0.365,0.37-0.373,1.078-0.008,1.449l2.959,3.09H9.654c-0.526,0-0.952,0.474-0.952,1s0.426,1,0.952,1h10.394l-2.976,2.814
                            c-0.375,0.369-0.379,0.891-0.01,1.265c0.369,0.375,0.972,0.339,1.346-0.03l0.011-0.031l4.665-4.611l0.185-0.158v-0.011V16.35
                            v-0.013v-0.159v-0.01l0.022-0.174L23.27,15.82V15.811z"/>
                        </g>
                }
            </svg>
        )
    }
}

class SliderArrow extends Component {
    state = {
        hover: false
    }

    onMouseEnter = () => {
        this.setState({
            hover: true
        })
    }

    onMouseLeave = () => {
        this.setState({
            hover: false
        })
    }

    render() {
        return (
            <svg onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 width="62px" height="60px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
                {
                    this.state.hover
                        ? <g>
                            <circle fill="#005A80" cx="16" cy="16" r="16"/>
                            <path fill="#FFFFFF" d="M23.27,15.811v-0.159v-0.013V15.48v-0.011l-0.181-0.148l-4.631-4.601c-0.375-0.369-0.992-0.364-1.361,0.01
                        c-0.365,0.37-0.373,1.078-0.008,1.449l2.959,3.09H9.654c-0.526,0-0.952,0.474-0.952,1c0,0.526,0.426,1,0.952,1h10.394l-2.976,2.814
                        c-0.375,0.369-0.379,0.891-0.01,1.265c0.369,0.375,0.972,0.339,1.346-0.03l0.011-0.031l4.665-4.611l0.185-0.158v-0.011V16.35
                        v-0.013v-0.159v-0.01l0.022-0.174L23.27,15.82V15.811z"/>
                        </g>
                        : <g>
                            <path fill='transparent' d="M25.9,6.101C23.363,3.565,19.869,2,16,2c-3.869,0-7.363,1.565-9.899,4.101C3.565,8.637,2.001,12.131,2,16
                    c0.001,3.869,1.565,7.363,4.101,9.899c2.537,2.535,6.03,4.1,9.899,4.101c3.869,0,7.363-1.565,9.9-4.101
                    c2.535-2.537,4.1-6.03,4.1-9.899C29.999,12.131,28.435,8.637,25.9,6.101z M23.27,16.169v0.01v0.159v0.013v0.159v0.011l-0.185,0.148
                    l-4.633,4.601l-0.027,0.011c-0.375,0.369-0.985,0.364-1.354-0.01c-0.369-0.375-0.368-0.815,0.006-1.184l2.972-2.814H9.654
                    c-0.526,0-0.952-0.474-0.952-1s0.426-1,0.952-1h10.394l-2.967-3.09c-0.364-0.371-0.364-1.022,0.001-1.392
                    c0.369-0.375,0.972-0.408,1.346-0.039l4.661,4.586l0.181,0.133v0.011v0.159v0.013v0.159v0.01l0.022,0.174L23.27,16.169z"/>
                            <path fill='#231F20' d="M16,0C7.163,0.001,0.001,7.163,0,16c0.001,8.837,7.163,15.999,16,16c8.837-0.001,15.999-7.163,16-16
                    C31.999,7.163,24.837,0.001,16,0z M16,30c-3.869,0-7.363-1.565-9.899-4.101C3.565,23.363,2.001,19.869,2,16
                    c0.001-3.869,1.565-7.363,4.101-9.899C8.637,3.565,12.131,2,16,2c3.869,0,7.363,1.565,9.9,4.101c2.535,2.537,4.1,6.03,4.1,9.899
                    c0,3.869-1.565,7.363-4.1,9.899C23.363,28.435,19.869,29.999,16,30z"/>
                            <path fill='#231F20' d="M23.27,15.811v-0.159v-0.013v-0.159v-0.011l-0.181-0.148l-4.631-4.601c-0.375-0.369-0.992-0.364-1.361,0.01
                    c-0.365,0.37-0.373,1.078-0.008,1.449l2.959,3.09H9.654c-0.526,0-0.952,0.474-0.952,1s0.426,1,0.952,1h10.394l-2.976,2.814
                    c-0.375,0.369-0.379,0.891-0.01,1.265c0.369,0.375,0.972,0.339,1.346-0.03l0.011-0.031l4.665-4.611l0.185-0.158v-0.011V16.35
                    v-0.013v-0.159v-0.01l0.022-0.174L23.27,15.82V15.811z"/>
                        </g>
                }
            </svg>
        )
    }
}

const Rss = (color = '') =>
    <svg className='mx-3' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         x="0px"
         y="0px"
         width="26px" height="26px" viewBox="0 0 26 26" xmlSpace="preserve">
        <g>
            <path fill={color} d="M0.942,22.163v-0.112H0.921c-0.513,0-0.923,0.538-0.918,1.05c0.006,0.513,0.209,0.979,0.722,0.973
            c0.524,0,0.711,0.46,0.711,0.984v0.026c0,0.513,0.646,0.922,1.158,0.915c0.513-0.007,1.031-0.484,1.023-0.997
            C3.618,23.476,2.469,22.163,0.942,22.163z"/>
            <path fill={color} d="M0.942,11.094v-0.043H0.914c-0.513,0-0.922,0.472-0.914,0.985c0.008,0.513,0.644,0.944,1.156,0.936
            c6.674,0,12.28,5.412,12.28,12.087v0.026c0,0.513,0.214,0.922,0.727,0.915s0.815-0.45,0.808-0.963
            C14.971,17.359,8.619,11.094,0.942,11.094z"/>
            <path fill={color} d="M23.216,0.051H2.798c-1.526,0-2.362,1.207-2.362,2.733v5.569v0.026c0,0.513,0.001,0.922,0.513,0.915
            c0.513-0.007,0.487-0.429,0.487-0.941V2.784c0-0.53,0.832-0.733,1.362-0.733h20.418c0.53,0,1.22,0.203,1.22,0.733v20.418
            c0,0.53-0.69,0.848-1.22,0.848h-5.569H17.62c-0.513,0-0.922,0.501-0.914,1.014c0.008,0.513,0.429,0.986,0.942,0.986h5.569
            c1.526,0,3.22-1.322,3.22-2.848V2.784C26.436,1.258,24.742,0.051,23.216,0.051z"/>
            <path fill={color} d="M0.942,17.051H0.916c-0.513,0-0.922,0.256-0.915,0.768c0.007,0.513,0.427,0.836,0.94,0.829
            c3.599,0,6.495,2.811,6.495,6.41v0.026c0,0.513,0.43,0.922,0.942,0.915s0.923-0.256,0.916-0.769
            C9.294,20.629,5.544,17.051,0.942,17.051z"/>
        </g>
    </svg>


const CalendarIcon = (color = '') =>
    <svg className='mx-2' version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px"
         width="25.297px" height="26px" viewBox="0 0 25.297 26" xmlSpace="preserve">
        <g>
            <rect x="11.243" y="18.973" fill="none" width="2.811" height="2.811"/>
            <rect x="11.243" y="11.946" fill="none" width="2.811" height="2.811"/>
            <rect x="18.27" y="18.973" fill="none" width="2.811" height="2.811"/>
            <rect x="18.27" y="11.946" fill="none" width="2.811" height="2.811"/>
            <path fill="none" d="M1.406,22.486c0,1.163,0.946,2.108,2.108,2.108h18.27c1.163,0,2.108-0.946,2.108-2.108V9.135H1.406V22.486z
                 M16.864,11.945c0-0.775,0.631-1.406,1.406-1.406h2.811c0.775,0,1.406,0.631,1.406,1.406v2.811c0,0.775-0.631,1.406-1.406,1.406
                H18.27c-0.774,0-1.405-0.63-1.406-1.406V11.945z M16.864,18.972c0-0.775,0.631-1.406,1.406-1.406h2.811
                c0.775,0,1.406,0.631,1.406,1.406v2.811c0,0.775-0.631,1.406-1.406,1.406H18.27c-0.774,0-1.405-0.63-1.406-1.406V18.972z
                 M9.837,11.945c0-0.775,0.631-1.406,1.406-1.406h2.811c0.775,0,1.406,0.631,1.406,1.406v2.811c0,0.775-0.631,1.406-1.406,1.406
                h-2.811c-0.775,0-1.405-0.63-1.406-1.406V11.945z M9.837,18.972c0-0.775,0.631-1.406,1.406-1.406h2.811
                c0.775,0,1.406,0.631,1.406,1.406v2.811c0,0.775-0.631,1.406-1.406,1.406h-2.811c-0.775,0-1.405-0.63-1.406-1.406V18.972z
                 M2.811,18.972c0-0.775,0.631-1.406,1.406-1.406h2.811c0.775,0,1.406,0.631,1.406,1.406v2.811c0,0.775-0.631,1.406-1.406,1.406
                H4.217c-0.776,0-1.406-0.63-1.406-1.406V18.972z"/>
            <path fill="none" d="M21.785,3.514h-2.108V4.92h-1.406V3.514H7.027V4.92H5.62V3.513H3.513c-1.163,0-2.108,0.946-2.108,2.108V7.73
                h22.487h0.001V5.622C23.893,4.459,22.947,3.514,21.785,3.514z"/>
            <rect x="4.217" y="18.973" fill="none" width="2.811" height="2.811"/>
            <path fill={color} d="M21.783,2.108h-2.108V0H18.27v2.108H7.027V0H5.621v2.108H3.514C1.576,2.108,0,3.683,0,5.621v16.865
                C0,24.424,1.576,26,3.514,26h18.27c1.938,0,3.514-1.576,3.514-3.514V9.135V7.73V5.621C25.297,3.685,23.721,2.108,21.783,2.108z
                 M23.892,22.486c0,1.162-0.945,2.108-2.108,2.108H3.514c-1.162,0-2.108-0.945-2.108-2.108V9.135h22.486V22.486z M23.893,7.73
                h-0.001H1.405V5.621c0-1.162,0.945-2.108,2.108-2.108H5.62V4.92h1.407V3.514h11.244V4.92h1.406V3.514h2.108
                c1.162,0,2.108,0.945,2.108,2.108V7.73z"/>
            <path fill={color} d="M11.243,16.162h2.811c0.775,0,1.406-0.631,1.406-1.406v-2.811c0-0.775-0.631-1.406-1.406-1.406h-2.811
                c-0.775,0-1.406,0.631-1.406,1.406v2.811C9.838,15.532,10.468,16.162,11.243,16.162z M11.243,11.946h2.811l0.001,2.811h-2.812
                V11.946z"/>
            <path fill={color} d="M18.27,16.162h2.811c0.775,0,1.406-0.631,1.406-1.406v-2.811c0-0.775-0.631-1.406-1.406-1.406H18.27
                c-0.775,0-1.406,0.631-1.406,1.406v2.811C16.865,15.532,17.496,16.162,18.27,16.162z M18.27,11.946h2.811l0.001,2.811H18.27V11.946
                z"/>
            <path fill={color} d="M4.217,23.189h2.811c0.775,0,1.406-0.631,1.406-1.406v-2.811c0-0.775-0.631-1.406-1.406-1.406H4.217
                c-0.775,0-1.406,0.631-1.406,1.406v2.811C2.811,22.559,3.441,23.189,4.217,23.189z M4.217,18.973h2.811l0.001,2.811H4.217V18.973z"
            />
            <path fill={color} d="M11.243,23.189h2.811c0.775,0,1.406-0.631,1.406-1.406v-2.811c0-0.775-0.631-1.406-1.406-1.406h-2.811
                c-0.775,0-1.406,0.631-1.406,1.406v2.811C9.838,22.559,10.468,23.189,11.243,23.189z M11.243,18.973h2.811l0.001,2.811h-2.812
                V18.973z"/>
            <path fill={color} d="M18.27,23.189h2.811c0.775,0,1.406-0.631,1.406-1.406v-2.811c0-0.775-0.631-1.406-1.406-1.406H18.27
                c-0.775,0-1.406,0.631-1.406,1.406v2.811C16.865,22.559,17.496,23.189,18.27,23.189z M18.27,18.973h2.811l0.001,2.811H18.27V18.973
                z"/>
        </g>
    </svg>

const ArrowType2 = (color = '') =>
    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px"
         width="29px" height="23.587px" viewBox="0 0 31 23.587" xmlSpace="preserve">
        <path fill={color} d="M2.022,13.804h22.077l-6.321,6.321c-0.795,0.784-0.805,2.064-0.021,2.859
            c0.784,0.795,2.064,0.805,2.859,0.021c0.008-0.008,0.015-0.015,0.023-0.023l9.772-9.772c0.096-0.096,0.181-0.201,0.256-0.313v-0.024
            c0.068-0.107,0.125-0.22,0.172-0.337V12.51c0.045-0.109,0.08-0.222,0.104-0.337v-0.02c0.031-0.122,0.05-0.246,0.057-0.371l0,0
            c-0.001-0.124-0.013-0.249-0.037-0.371v-0.02c-0.025-0.115-0.06-0.228-0.104-0.337v-0.027c-0.047-0.117-0.104-0.23-0.172-0.337
            v-0.024c-0.075-0.113-0.16-0.218-0.256-0.313l-9.772-9.772c-0.795-0.784-2.076-0.774-2.859,0.022
            c-0.775,0.786-0.775,2.049-0.002,2.836l6.301,6.321H2.022C0.905,9.76,0,10.665,0,11.782S0.905,13.804,2.022,13.804z"/>
    </svg>


const Search = (color = '', color2 = '') =>
    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px"
         width="41px" height="41px" viewBox="0 0 41 41" enableBackground="new 0 0 41 41" xmlSpace="preserve">
        <g>
            <path fill={color} d="M20.5,2c-5.112,0-9.73,2.069-13.081,5.419C4.069,10.77,2.001,15.388,2,20.5
            c0.001,5.112,2.069,9.73,5.419,13.081C10.77,36.931,15.388,38.999,20.5,39c5.112,0,9.73-2.069,13.081-5.419
            C36.931,30.23,38.999,25.612,39,20.5c0-5.112-2.069-9.73-5.419-13.081C30.23,4.069,25.612,2,20.5,2z M30.336,29.071l-1.265,1.265
            c-0.219,0.219-0.573,0.219-0.792,0l-4.5-4.499c-1.412,0.99-3.109,1.529-4.846,1.529c-2.256,0-4.375-0.877-5.966-2.468
            c-1.591-1.591-2.467-3.71-2.467-5.965c0-2.256,0.877-4.375,2.468-5.966c1.591-1.591,3.71-2.467,5.965-2.467
            c2.256,0,4.375,0.877,5.965,2.468c2.936,2.937,3.294,7.477,0.938,10.813l4.499,4.498C30.555,28.498,30.555,28.852,30.336,29.071z"
            />
            <path fill={color} d="M18.933,13.408c-1.479,0-2.867,0.574-3.909,1.616c-2.154,2.155-2.154,5.662,0,7.817
            c1.043,1.042,2.431,1.617,3.909,1.617c1.478,0,2.866-0.575,3.909-1.617c2.154-2.155,2.154-5.662,0-7.817
            C21.8,13.983,20.412,13.408,18.933,13.408z"/>
            <path fill={color2} d="M25.837,23.781c2.355-3.336,1.998-7.876-0.938-10.813c-1.591-1.591-3.71-2.468-5.965-2.468
            c-2.256,0-4.375,0.877-5.965,2.467c-1.591,1.591-2.468,3.71-2.468,5.966c0,2.256,0.877,4.375,2.467,5.965
            c1.591,1.591,3.71,2.468,5.966,2.468c1.737,0,3.434-0.539,4.846-1.529l4.5,4.499c0.219,0.219,0.573,0.219,0.792,0l1.265-1.265
            c0.219-0.219,0.219-0.573,0-0.792L25.837,23.781z M22.842,22.842c-1.043,1.042-2.431,1.617-3.909,1.617
            c-1.478,0-2.866-0.575-3.909-1.617c-2.154-2.155-2.154-5.662,0-7.817c1.042-1.042,2.43-1.616,3.909-1.616
            c1.479,0,2.867,0.574,3.909,1.616C24.996,17.179,24.996,20.687,22.842,22.842z"/>
            <path fill={color} d="M20.5,0C9.178,0.001,0.001,9.178,0,20.5C0.001,31.822,9.178,40.999,20.5,41c11.322-0.001,20.499-9.178,20.5-20.5
            C40.999,9.178,31.822,0.001,20.5,0z M33.581,33.581C30.23,36.931,25.612,38.999,20.5,39c-5.112,0-9.73-2.069-13.081-5.419
            C4.069,30.23,2.001,25.612,2,20.5c0.001-5.112,2.069-9.73,5.419-13.081C10.77,4.069,15.388,2,20.5,2
            c5.112,0,9.73,2.069,13.081,5.419C36.931,10.77,38.999,15.388,39,20.5C38.999,25.612,36.931,30.23,33.581,33.581z"/>
        </g>
    </svg>

const ArrowIcon = (color = '') =>
    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px"
         width="13px" height="6.87px" viewBox="0 0 13 6.87" enableBackground="new 0 0 13 6.87" xmlSpace="preserve">
        <g>
            <path fill="#659AB0" d="M0.189,0.216C0.071,0.358,0,0.524,0,0.713c0,0.189,0.071,0.379,0.213,0.52l5.796,5.441
            c0.284,0.26,0.71,0.26,0.97,0l5.796-5.441c0.284-0.26,0.308-0.71,0.024-0.994c-0.26-0.284-0.71-0.308-0.994-0.024L6.506,5.184
            L1.183,0.192C0.899-0.068,0.449-0.068,0.189,0.216z"/>
        </g>
    </svg>


const FileIcon = (color = '') =>
    <svg xmlns="http://www.w3.org/2000/svg" width={27} viewBox="0 0 16 16">
        <path fill={color}
              d="M 4.5 2 C 3.6774686 2 3 2.6774686 3 3.5 L 3 12.5 C 3 13.322531 3.6774686 14 4.5 14 L 11.5 14 C 12.322531 14 13 13.322531 13 12.5 L 13 5.2929688 L 12.853516 5.1464844 L 9.7070312 2 L 4.5 2 z M 4.5 3 L 9 3 L 9 6 L 12 6 L 12 12.5 C 12 12.781469 11.781469 13 11.5 13 L 4.5 13 C 4.2185314 13 4 12.781469 4 12.5 L 4 3.5 C 4 3.2185314 4.2185314 3 4.5 3 z M 10 3.7070312 L 11.292969 5 L 10 5 L 10 3.7070312 z"
        />
    </svg>

const SmallCross = (color = '') =>
    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path fill={color}
              d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"/>
    </svg>

export {ArrowType1, ArrowType3, Rss, CalendarIcon, ArrowType2, Search, ArrowIcon, FileIcon, SmallCross, SliderArrow}