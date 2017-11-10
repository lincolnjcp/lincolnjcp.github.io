export default class Utils {

    static decorateHtmlPreview(HTMLCode) {
        const htmlCode = HTMLCode
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace('javascript:void();', '#')
            .replace(/\[\[format_tab_start\]\]/g, '<div class="code-format-tab">')
            .replace(/\[\[format_tab_end\]\]/g, '</div>')
            .replace(/\[\[format_attribute_start\]\]/g, '<span class="code-format-attribute">')
            .replace(/\[\[format_attribute_end\]\]/g, '</span>')
            .replace(/\[\[format_tag_start\]\]/g, '<span class="code-format-tag">')
            .replace(/\[\[format_tag_end\]\]/g, '</span>')
            .replace(/\[\[format_tag_value_start\]\]/g, '<span class="code-format-tag-value">')
            .replace(/\[\[format_tag_value_end\]\]/g, '</span>')
            .replace(/\[\[format_br\]\]/g, '<br />')
            .replace(/(\s*)\<\/span/g, '</span')
            .replace(/code-generator-preview/g, '')
            ;
        return htmlCode;
    }

}
