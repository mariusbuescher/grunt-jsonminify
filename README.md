# grunt-jsonminify
A grunt task that minifies JSON data

## Usage

Install via ```npm install grunt-jsonminify --save-dev```.

There are no configuration options available. Use the files section for each task.

### Example:

```javascript
grunt.initConfig({
    jsonminify: {
        test: {
            files: [
                {
                    src: '**/*.json',
                    dest: 'test-result',
                    cwd: 'test/'
                }
            ]
        }
    }
});
```
