import plumber from 'gulp-plumber'; /* обработка ошибок */
import notify from 'gulp-notify'; /* сообщения */
import browsersync from 'browser-sync'; /* этот плагин для открытия браузера и перезагрузки */


// экспортируем объект
export const plugins = {
    plumber,
    notify,
    browsersync
}