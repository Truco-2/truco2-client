import * as React from 'react';

interface ILogoProps {
    width: number;
    height: number;
}

const Logo: React.FC<ILogoProps> = ({ height, width }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 242 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M121.307 37.34c-21.863-20.67-21.769 20.8 0 0zm.17-.187c-19.081-23.73 18.969-23.835 0 0zm13.889-5.098c2.043 1.246 2.901 3.842 2.585 6.23-.643 4.804-6.067 8.732-16.304-.945 6.513-6.225 11.098-6.886 13.719-5.285zm-13.891 5.472c-18.965 23.833 19.086 23.73 0 0zM43.738 103.2s2.369 9.9-.592 16.787c0 0 9.279.646 15.004-15.711s.987-22.02 11.647-36.622c10.662-14.6 38.481-11.855 51.618 7.514 14.944 0 27.058 13.207 27.058 29.499 0 10.522-5.07 19.732-12.678 24.953-.919.692-1.584 1.096-1.822 1.197l-.008.005-.09.036.001.009c-1.434.607-2.777 1.789-3.7 3.427-1.89 3.353-.153 6.417 2.438 7.948 1.307.774 2.877.777 4.355.167 6.481-3.01 11.249-8.631 14.325-15.31 1.314 1.25 3.238 1.542 5.063 1.118 1.454-.339 2.651-1.446 3.412-2.957 4.033-8.849 3.367-18.98-.094-27.896 2.971 1.238 5.392-.784 6.502-3.559.593-1.487.462-3.193-.224-4.745-8.216-16.838-30.154-21.04-44.538-13.892 13.137-19.37 40.956-22.115 51.618-7.514 10.661 14.601 5.922 20.265 11.648 36.622 5.725 16.357 15.004 15.711 15.004 15.711-2.962-6.887-.593-16.787-.593-16.787 9.279 39.601 27.967 24.096 27.967 24.096C194.196 63.475 121.415 0 121.415 0S48.635 63.475 15.772 127.295c0 0 18.687 15.505 27.966-24.096z"
            fill="#fff"
        />
        <path
            d="M76.877 89.06c-.686 1.552-.816 3.257-.222 4.744 1.108 2.775 3.53 4.798 6.5 3.559-3.459 8.916-4.126 19.047-.093 27.896.762 1.511 1.958 2.618 3.411 2.958 1.825.423 3.75.132 5.063-1.12 3.076 6.68 7.844 12.302 14.325 15.311 1.479.61 3.049.607 4.355-.166 2.592-1.532 4.329-4.596 2.44-7.949-.924-1.637-2.268-2.82-3.701-3.427l.001-.008-.09-.038-.009-.005c-.238-.1-.903-.506-1.823-1.196-7.606-5.221-12.677-14.431-12.677-24.954 0-16.292 12.115-29.497 27.058-29.497-14.384-7.148-36.322-2.948-44.538 13.891z"
            fill="#fff"
        />
        <path
            d="M36.066 134.015c-.54 1.418.078 3.04 1.376 3.63 1.301.587 2.79-.085 3.329-1.502.539-1.417-.078-3.042-1.376-3.629-1.3-.585-2.79.085-3.33 1.501zM48.32 128.781c-.897 2.36.129 5.068 2.294 6.049 2.165.977 4.648-.142 5.546-2.502.898-2.363-.13-5.068-2.293-6.048-2.166-.977-4.648.139-5.547 2.501zM62.544 117.566c-1.359 3.568.196 7.657 3.468 9.138 3.271 1.481 7.026-.212 8.384-3.777 1.357-3.569-.195-7.659-3.468-9.14-3.273-1.479-7.027.212-8.384 3.779zM205.388 137.645c1.298-.591 1.917-2.212 1.377-3.629-.539-1.417-2.03-2.088-3.33-1.502-1.298.588-1.915 2.212-1.375 3.629.539 1.416 2.027 2.089 3.328 1.502zM192.217 134.83c2.165-.981 3.191-3.689 2.294-6.049-.899-2.362-3.381-3.479-5.548-2.501-2.163.98-3.19 3.685-2.292 6.048.897 2.36 3.38 3.478 5.546 2.502zM176.819 126.704c3.272-1.481 4.827-5.57 3.468-9.138-1.357-3.567-5.111-5.259-8.384-3.779-3.273 1.481-4.825 5.571-3.468 9.14 1.358 3.566 5.113 5.258 8.384 3.777zM140.091 111.248c.607-2.057.942-4.249.942-6.526 0-2.276-.335-4.468-.942-6.525-1.148 3.363-5.21 6.525-13.792 6.525 8.582 0 12.644 3.165 13.792 6.526zM107.021 90.41c3.243-.576 7.772 1.686 12.049 9.764-4.29-8.103-3.809-13.516-1.714-16.283-4.061.952-7.641 3.286-10.335 6.518zM135.938 90.41c-2.694-3.233-6.274-5.567-10.334-6.519 2.095 2.767 2.575 8.18-1.714 16.283 4.277-8.078 8.805-10.34 12.048-9.765zM107.021 119.036c2.694 3.233 6.274 5.566 10.335 6.518-2.095-2.765-2.576-8.183 1.714-16.281-4.277 8.077-8.806 10.34-12.049 9.763zM102.869 98.197a23.035 23.035 0 00-.942 6.525c0 2.277.335 4.469.942 6.526 1.148-3.362 5.21-6.526 13.792-6.526-8.582 0-12.644-3.162-13.792-6.525zM135.938 119.036c-3.243.577-7.771-1.686-12.048-9.763 4.289 8.098 3.809 13.516 1.714 16.281 4.06-.952 7.64-3.285 10.334-6.518z"
            fill="#DC8230"
        />
        <path
            d="M121.48 107.84c1.578 0 2.858-1.395 2.858-3.117s-1.28-3.116-2.858-3.116c-1.579 0-2.858 1.394-2.858 3.116 0 1.722 1.279 3.117 2.858 3.117z"
            fill="#fff"
        />
        <path
            d="M121.307 37.34c-21.863-20.67-21.769 20.8 0 0zM121.478 37.153c-19.082-23.73 18.968-23.835 0 0zM121.476 37.528c-18.966 23.832 19.085 23.729 0 0zM137.952 38.284c.315-2.387-.543-4.983-2.585-6.228-2.623-1.602-7.206-.94-13.72 5.284 10.237 9.677 15.661 5.749 16.305.944z"
            fill="#DC8230"
        />
        <path
            d="M46.454 170.668a13.436 13.436 0 011.321-3.286c1.9-3.315 5.115-5.294 8.599-5.294 3.709 0 7.117 2.262 8.893 5.904.495 1.016.996 2.417 1.23 4.203a11.21 11.21 0 012.889-.386c5.737 0 10.232 4.791 10.232 10.907 0 3.344-1.381 6.704-4.309 9.189 2.348 2.654 3.272 5.782 3.182 8.615-.188 5.886-4.617 10.5-10.083 10.501h-.003c-1.148 0-2.652-.206-4.347-.946a13.453 13.453 0 01-1.32 3.286c-1.9 3.315-5.115 5.295-8.598 5.295-3.709 0-7.116-2.262-8.892-5.904-.496-1.015-.997-2.416-1.23-4.202-1.053.28-2.023.386-2.889.386h-.002c-3.755 0-7.08-2.047-8.897-5.476-1.808-3.414-1.79-7.524.05-10.997a12.456 12.456 0 012.923-3.621c-2.349-2.655-3.273-5.785-3.183-8.618.189-5.889 4.62-10.503 10.087-10.503 1.148 0 2.652.206 4.347.947zM24.22 188.002c-24.14-1.841.105 52.362 13.637 30.491-13.532 21.871 41.646 26.079 31.038 2.367 10.608 23.712 41.54-26.284 17.4-28.121 24.14 1.837-.102-52.354-13.637-30.487 13.535-21.867-41.647-26.086-31.038-2.366-10.61-23.72-41.54 26.275-17.4 28.116zM200.873 208.936a11.21 11.21 0 01-2.89-.386c-.235 1.785-.736 3.186-1.231 4.2-1.775 3.643-5.182 5.905-8.89 5.906h-.002c-3.483 0-6.697-1.979-8.598-5.293a13.474 13.474 0 01-1.321-3.288c-1.695.74-3.2.946-4.348.946-5.466 0-9.896-4.612-10.085-10.499-.091-2.832.833-5.96 3.18-8.614-2.745-2.352-4.307-5.668-4.307-9.191 0-6.116 4.496-10.908 10.234-10.908.866 0 1.837.106 2.889.386.234-1.786.735-3.187 1.23-4.203 1.777-3.642 5.184-5.905 8.892-5.905 3.485 0 6.699 1.98 8.6 5.295.463.807.957 1.897 1.32 3.286 1.696-.74 3.199-.946 4.347-.946 5.469 0 9.9 4.613 10.088 10.503.091 2.832-.834 5.961-3.182 8.616 2.926 2.484 4.307 5.843 4.307 9.186 0 6.117-4.495 10.909-10.233 10.909zm-.491-49.051c10.608-23.719-44.574-19.5-31.039 2.367-13.535-21.867-37.776 32.324-13.636 30.487-24.14 1.837 6.791 51.833 17.399 28.121-10.608 23.712 44.57 19.504 31.038-2.367 13.532 21.871 37.777-32.332 13.636-30.491 24.141-1.841-6.79-51.836-17.398-28.117z"
            fill="#fff"
        />
        <path
            d="M189.475 194.789c14.774 23.871-16.453 26.256-4.872.374-11.581 25.882-29.084-2.404-2.73-4.416-26.354 2.012-12.637-28.662 2.139-4.791-14.776-23.871 16.453-26.26 4.873-.378 11.58-25.882 29.082 2.413 2.733 4.416 26.349-2.003 12.631 28.666-2.143 4.795zm21.63 3.237c0-3.342-1.381-6.701-4.307-9.185 2.349-2.655 3.273-5.784 3.183-8.617-.189-5.889-4.62-10.503-10.088-10.503-1.147 0-2.652.206-4.346.947a13.479 13.479 0 00-1.321-3.286c-1.901-3.315-5.115-5.294-8.6-5.294-3.709 0-7.116 2.263-8.892 5.904-.495 1.016-.997 2.416-1.231 4.203a11.247 11.247 0 00-2.889-.386c-5.738 0-10.233 4.792-10.233 10.908 0 3.522 1.562 6.84 4.306 9.19-2.347 2.655-3.27 5.783-3.179 8.615.189 5.887 4.618 10.499 10.085 10.499 1.148 0 2.653-.206 4.348-.946.364 1.39.858 2.48 1.322 3.289 1.899 3.313 5.114 5.292 8.597 5.292h.002c3.708-.001 7.114-2.264 8.89-5.906.495-1.015.996-2.415 1.23-4.2 1.053.28 2.024.386 2.89.386 5.739 0 10.234-4.793 10.233-10.91zM53.115 185.578c-11.58-25.882 19.65-23.493 4.873.379 14.777-23.872 28.492 6.802 2.139 4.789 26.353 2.013 8.85 30.299-2.73 4.416 11.58 25.883-19.646 23.497-4.872-.373-14.774 23.87-28.493-6.798-2.142-4.795-26.35-2.003-8.848-30.298 2.732-4.416zm-21.094-5.353c-.09 2.832.833 5.961 3.182 8.616a12.445 12.445 0 00-2.923 3.622c-1.84 3.473-1.858 7.584-.05 10.997 1.817 3.429 5.143 5.476 8.896 5.476h.003c.866 0 1.836-.106 2.888-.386.234 1.786.736 3.187 1.231 4.203 1.777 3.642 5.183 5.904 8.891 5.903 3.484 0 6.698-1.98 8.599-5.296.463-.808.956-1.896 1.32-3.285 1.695.74 3.199.946 4.347.946h.003c5.466-.002 9.895-4.615 10.083-10.502.09-2.831-.834-5.96-3.182-8.615 2.928-2.484 4.31-5.845 4.31-9.189 0-6.116-4.496-10.906-10.233-10.906-.866 0-1.837.107-2.888.386-.235-1.787-.736-3.187-1.231-4.202-1.776-3.643-5.184-5.906-8.893-5.906-3.484 0-6.699 1.979-8.598 5.295a13.436 13.436 0 00-1.321 3.286c-1.696-.74-3.2-.947-4.348-.947-5.468 0-9.898 4.614-10.086 10.504z"
            fill="#DC8230"
        />
        <path
            d="M233.191 142.337s-6.355 3.946-2.399 13.484c-2.778-.163-5.494 3.096-2.282 8.015 4.674 7.157 10.011 18.016 4.693 41.255-8.627 24.041-30.095 41.121-55.168 41.121-2.472 0-4.867-.21-7.191-.572-34.485-8.25-35.351-45.789-35.351-45.789-5.871 10.048-.957 19.808-.957 19.808s-10.069-8.07-7.7-24.858c2.37-16.787-5.836-18.885-5.836-18.885s-8.206 2.098-5.836 18.885c2.369 16.788-7.7 24.858-7.7 24.858s4.914-9.76-.957-19.808c0 0-.866 37.539-35.35 45.789-2.325.362-4.72.572-7.192.572-25.073 0-46.54-17.08-55.168-41.121-5.318-23.239.02-34.098 4.693-41.255 3.212-4.919.496-8.178-2.282-8.015 3.956-9.538-2.399-13.484-2.399-13.484C3.3 155.853 0 169.159 0 181.647c0 38.511 28.638 69.731 63.965 69.731l.08-.002a48.92 48.92 0 002.58-.073 47.704 47.704 0 001.913-.148c.175-.016.353-.026.527-.045 28.571-2.854 46.72-28.716 46.72-28.716s-13.659 25.353-21.359 32.779c0 0 10.328 2.73 18.329.413-12.748 8.151-23.773 4.222-24.816 3.818l-.011-.005c-.047-.018-.079-.028-.079-.028l-.002.005a5.151 5.151 0 00-4.192.163c-2.817 1.379-4.075 4.987-2.81 8.059a5.891 5.891 0 002.286 2.755c-3.681.009-6.138-.53-6.688-.668l-.015-.001-.116-.031-.003.01a7.278 7.278 0 00-5.826.992c-3.725 2.44-4.928 7.71-2.691 11.769 1.13 2.046 2.922 3.392 4.896 3.912 12.844 2.748 24.72-3.314 33.828-13.154-4.94 8.043-8.928 13.818-8.928 13.818h46.824s-3.988-5.775-8.928-13.817c9.108 9.839 20.984 15.901 33.829 13.153 1.973-.52 3.765-1.866 4.895-3.912 2.237-4.059 1.034-9.329-2.69-11.769a7.28 7.28 0 00-5.827-.992l-.003-.01-.116.031-.015.001c-.55.138-3.006.677-6.688.668a5.888 5.888 0 002.286-2.755c1.265-3.072.007-6.68-2.81-8.059a5.152 5.152 0 00-4.192-.163l-.002-.005-.079.028-.011.005c-1.043.404-12.068 4.333-24.816-3.818 8.001 2.317 18.329-.413 18.329-.413-7.7-7.426-21.359-32.779-21.359-32.779s18.15 25.862 46.72 28.716c.174.018.352.03.527.045.634.057 1.268.115 1.912.148a51.17 51.17 0 002.581.073l.08.002c35.327 0 63.965-31.22 63.965-69.731 0-12.488-3.299-25.794-8.809-39.31z"
            fill="#fff"
        />
    </svg>
);
export default Logo;
