import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="mt-6 border-t pt-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            © 2023 Your Company. All Rights Reserved.
          </span>
          <div className="flex space-x-5">
            <a
              href="https://github.com"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.62-5.475 5.92.43.37.814 1.102.814 2.222v3.293c0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.664 1.561-.664 2.457 0 1.69.861 3.179 2.169 4.055-.8-.026-1.555-.245-2.213-.612v.061c0 2.362 1.679 4.337 3.911 4.779-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067 2.179 1.396 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.998 3A2.002 2.002 0 0 1 22 5.002v13.996A2.002 2.002 0 0 1 19.998 21H4.002A2.002 2.002 0 0 1 2 18.998V5.002A2.002 2.002 0 0 1 4.002 3h15.996zM8.5 17.5v-7h-3v7h3zm-1.5-8.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm10.5 8.25v-4.25c0-2.071-1.679-3.75-3.75-3.75s-3.75 1.679-3.75 3.75V17.5h3v-4.25c0-.414.336-.75.75-.75s.75.336.75.75V17.5h3z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
