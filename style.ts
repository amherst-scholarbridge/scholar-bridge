
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #df6136
        "--color-primary-50": "250 231 225", // #fae7e1
        "--color-primary-100": "249 223 215", // #f9dfd7
        "--color-primary-200": "247 216 205", // #f7d8cd
        "--color-primary-300": "242 192 175", // #f2c0af
        "--color-primary-400": "233 144 114", // #e99072
        "--color-primary-500": "223 97 54", // #df6136
        "--color-primary-600": "201 87 49", // #c95731
        "--color-primary-700": "167 73 41", // #a74929
        "--color-primary-800": "134 58 32", // #863a20
        "--color-primary-900": "109 48 26", // #6d301a
        // secondary | #ffffff
        "--color-secondary-50": "255 255 255", // #ffffff
        "--color-secondary-100": "255 255 255", // #ffffff
        "--color-secondary-200": "255 255 255", // #ffffff
        "--color-secondary-300": "255 255 255", // #ffffff
        "--color-secondary-400": "255 255 255", // #ffffff
        "--color-secondary-500": "255 255 255", // #ffffff
        "--color-secondary-600": "230 230 230", // #e6e6e6
        "--color-secondary-700": "191 191 191", // #bfbfbf
        "--color-secondary-800": "153 153 153", // #999999
        "--color-secondary-900": "125 125 125", // #7d7d7d
        // tertiary | #df6136
        "--color-tertiary-50": "250 231 225", // #fae7e1
        "--color-tertiary-100": "249 223 215", // #f9dfd7
        "--color-tertiary-200": "247 216 205", // #f7d8cd
        "--color-tertiary-300": "242 192 175", // #f2c0af
        "--color-tertiary-400": "233 144 114", // #e99072
        "--color-tertiary-500": "223 97 54", // #df6136
        "--color-tertiary-600": "201 87 49", // #c95731
        "--color-tertiary-700": "167 73 41", // #a74929
        "--color-tertiary-800": "134 58 32", // #863a20
        "--color-tertiary-900": "109 48 26", // #6d301a
        // success | #84cc16
        "--color-success-50": "237 247 220", // #edf7dc
        "--color-success-100": "230 245 208", // #e6f5d0
        "--color-success-200": "224 242 197", // #e0f2c5
        "--color-success-300": "206 235 162", // #ceeba2
        "--color-success-400": "169 219 92", // #a9db5c
        "--color-success-500": "132 204 22", // #84cc16
        "--color-success-600": "119 184 20", // #77b814
        "--color-success-700": "99 153 17", // #639911
        "--color-success-800": "79 122 13", // #4f7a0d
        "--color-success-900": "65 100 11", // #41640b
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #d41976
        "--color-error-50": "249 221 234", // #f9ddea
        "--color-error-100": "246 209 228", // #f6d1e4
        "--color-error-200": "244 198 221", // #f4c6dd
        "--color-error-300": "238 163 200", // #eea3c8
        "--color-error-400": "225 94 159", // #e15e9f
        "--color-error-500": "212 25 118", // #d41976
        "--color-error-600": "191 23 106", // #bf176a
        "--color-error-700": "159 19 89", // #9f1359
        "--color-error-800": "127 15 71", // #7f0f47
        "--color-error-900": "104 12 58", // #680c3a
        // surface | #2A2B32
        "--color-surface-50": "223 223 224", // #dfdfe0
        "--color-surface-100": "212 213 214", // #d4d5d6
        "--color-surface-200": "202 202 204", // #cacacc
        "--color-surface-300": "170 170 173", // #aaaaad
        "--color-surface-400": "106 107 112", // #6a6b70
        "--color-surface-500": "42 43 50", // #2A2B32
        "--color-surface-600": "38 39 45", // #26272d
        "--color-surface-700": "32 32 38", // #202026
        "--color-surface-800": "25 26 30", // #191a1e
        "--color-surface-900": "21 21 25", // #151519

    }
}