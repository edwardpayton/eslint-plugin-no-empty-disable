"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// no-empty-eslint-disable
const regex = /^eslint-disable(-next-line|-line)?($|(\s+(@[\w-]+\/(?:[\w-]+\/)?)?[\w-]+)?)/;
exports.noEmptyEslintDisable = {
    meta: {
        docs: {
            description: "Prevent using `eslint-disable` comments without at least one rule"
        },
        messages: {
            messageDisable: "Disabling all eslint rules is not allowed at line {{line}}:{{column}}. (hint: add the specific rule you want to disable)"
        }
    },
    create(context) {
        const comments = context.getSourceCode().getAllComments();
        comments.forEach(({ value, loc }) => {
            const result = regex.exec(value.trim());
            if (!result || result[2])
                return {};
            context.report({
                loc: {
                    line: 0,
                    column: 0
                },
                messageId: "messageDisable",
                data: loc.start
            });
        });
        return {};
    }
};
//# sourceMappingURL=no-empty-eslint-disable.js.map