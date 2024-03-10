<?php

use CCI\Ui\Ui;

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

global $USER;

// Название компонента, не редактировать
$componentName = 'url';

// Регистрация компонента
Ui::active();
Ui::registration($componentName);

?>
    <section class="mdl-grid mdl-width-area">
        <div class="mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <?php
            // Подключение как компонента.
            // Внимание: при подключении как компонент не будут работать vue-router и vuex.
            // Ui::comp($componentName);

            // Подключение в виде создания нового экземпляра Vue.
            Ui::create($componentName);

            // Добавление глобального значения.
            Ui::global([
                'item' => 'These are global data'
            ]);

            // Добавляет кешированный запрос.
            // Это нужно, чтобы уменьшить лишние запросы к серверу при загрузке страницы.
            Ui::request([
                'path' => 'user',
                'method' => 'GET',
                'response' => [
                    'id' => $USER->IsAuthorized() ? $USER->GetLogin() : null,
                    'name' => $USER->IsAuthorized() ? $USER->GetFullName() : null
                ]
            ]);
            ?>
        </div>
    </section>
<?php

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php");
