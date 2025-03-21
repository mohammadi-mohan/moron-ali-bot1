const _0x2dfd7e = _0x461b;
(function (_0x5f9c0c, _0x1d5e1b) {
    const _0x10815c = _0x461b,
        _0x136f31 = _0x5f9c0c();
    while (!![]) {
        try {
            const _0xcd919b = parseInt(_0x10815c(0xa5)) / 0x1 + parseInt(_0x10815c(0xbc)) / 0x2 + parseInt(_0x10815c(0xd9)) / 0x3 + parseInt(_0x10815c(0x93)) / 0x4 + parseInt(_0x10815c(0xd2)) / 0x5 + -parseInt(_0x10815c(0xac)) / 0x6 * (parseInt(_0x10815c(0xc2)) / 0x7) + -parseInt(_0x10815c(0xb4)) / 0x8 * (parseInt(_0x10815c(0xa7)) / 0x9);
            if (_0xcd919b === _0x1d5e1b) break;
            else _0x136f31['push'](_0x136f31['shift']());
        } catch (_0xec700f) {
            _0x136f31['push'](_0x136f31['shift']());
        }
    }
}(_0x5b01, 0x37001));
function _0x461b(_0x57dd03, _0x52070) {
    const _0x5b0123 = _0x5b01();
    return _0x461b = function (_0x461b0b, _0x4bd641) {
        _0x461b0b = _0x461b0b - 0x8a;
        let _0x256ed6 = _0x5b0123[_0x461b0b];
        return _0x256ed6;
    }, _0x461b(_0x57dd03, _0x52070);
}
function hi() {
    const _0x3fdc79 = _0x461b;
    console[_0x3fdc79(0xa2)](_0x3fdc79(0x8f));
}
hi();
function _0x5b01() {
    const _0x3e0910 = [
        'Hello World!',
        '". Use "start", "stop", or "status."',
        'sort',
        'View command usage',
        '767352JMtqhg',
        'longDescription',
        '\n  ├── Notes\n  │ The content inside <XXXXX> can be changed\n  │ The content inside [a|b|c] is a or b or c\n  ╰━━━━━━━❖',
        ' command(s) starting with "',
        '\n  │ Other names: ',
        's\n  │ Author: ',
        '⇒ Total: ',
        'Unknown',
        '\n  │ Time per command: ',
        'No commands found starting with "',
        'supportgc or type: ',
        '\n  │ Role: ',
        'author',
        'stop',
        'countDown',
        'log',
        'fs-extra',
        'Invalid review type "',
        '217095PuLHrQ',
        'toUpperCase',
        '153ykxVLY',
        '╰────────────◊\n\n',
        '2 (Admin bot)',
        'axios',
        '\n  │ Version: ',
        '5190seNnJk',
        'Uncategorized',
        'Started monitoring ',
        'size',
        'config',
        'GoatBot',
        'info',
        'role',
        '293528grecfY',
        ' ✧ ',
        '1.0',
        'reply',
        'name',
        'callad to contact with admins.\n\n',
        'View command usage, list all commands, search commands by the first letter, review stats or logs, and monitor specific actions',
        'push',
        '411584hGbSmD',
        'version',
        '\n  ├── INFO\n  │ Description: ',
        'join',
        'No description',
        'exports',
        '1337DyojLZ',
        '  』\n',
        '0 (All users)',
        // ----- এখানে 𝐀𝐌𝐈𝐍𝐔𝐋-𝐁𝐎𝐓 এর পরিবর্তে 𝐌𝐎𝐑𝐎𝐍-𝐀𝐋𝐈-𝐁𝐎𝐓 দেয়া হলো -----
        '━━━ 💖 𝐌𝐎𝐑𝐎𝐍-𝐀𝐋𝐈-𝐁𝐎𝐓 💖 ━━━\n\n',
        'usage',
        'path',
        ' commands\n',
        '╭── NAME ───⭓\n  │ ',
        // ----- এখানে 𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿 এর পরিবর্তে Moron Ali দেয়া হলো -----
        'Moron Ali',
        'Usage statistics:\n[Usage details...]\n',
        'help',
        'start',
        '⇒ Use ',
        'get',
        'logs',
        'toLowerCase',
        '1520465QjsfxE',
        'category',
        'utils',
        'Invalid monitor action "',
        'replace',
        '" not found.',
        '1.18',
        '286275ZeTrYG',
        'Command "',
        '╭──『  ',
        '". Use "logs" or "usage".',
        'help <cmd> to get more information',
        'length'
    ];
    _0x5b01 = function () {
        return _0x3e0910;
    };
    return _0x5b01();
}
const fs = require(_0x2dfd7e(0xa3)),
    axios = require(_0x2dfd7e(0xaa)),
    path = require(_0x2dfd7e(0xc7)),
    { getPrefix } = global[_0x2dfd7e(0xd4)],
    { commands, aliases } = global[_0x2dfd7e(0xb1)];
module[_0x2dfd7e(0xc1)] = {
    'config': {
        'name': _0x2dfd7e(0xcc),
        'version': _0x2dfd7e(0xd8),
        'author': _0x2dfd7e(0xca),
        'countDown': 0x0,
        'role': 0x0,
        'shortDescription': { 'en': _0x2dfd7e(0x92) },
        'longDescription': { 'en': _0x2dfd7e(0xba) },
        'category': _0x2dfd7e(0xb2),
        'guide': {
            'en': '{pn} / help cmdName \n{pn} / help -s <letter> (to search commands by the first letter)\n{pn} / help -r <logs|usage> (to review logs or usage)\n{pn} / help -m <start|stop|status> <target> (to monitor specific actions)'
        },
        'priority': 0x1
    },
    'onStart': async function ({ message: _0x2f495a, args: _0x2a7a65, event: _0x4ab1ca, threadsData: _0x412699, role: _0x12542b }) {
        const _0x51feaf = _0x2dfd7e,
            { threadID: _0x68c8ed } = _0x4ab1ca,
            _0x5dd7fd = await _0x412699['get'](_0x68c8ed),
            _0x20eb27 = getPrefix(_0x68c8ed);
        if (_0x2a7a65[_0x51feaf(0x8e)] === 0x0) {
            let _0x4182e1 = _0x51feaf(0xc5);
            const _0x1ad8ca = {};
            for (const [_0x3762b9, _0x5e1c14] of commands) {
                if (_0x5e1c14[_0x51feaf(0xb0)][_0x51feaf(0xb3)] > 0x1 && _0x12542b < _0x5e1c14[_0x51feaf(0xb0)][_0x51feaf(0xb3)]) continue;
                const _0x30400b = _0x5e1c14['config'][_0x51feaf(0xd3)] || _0x51feaf(0xad);
                if (!_0x1ad8ca[_0x30400b]) _0x1ad8ca[_0x30400b] = [];
                _0x1ad8ca[_0x30400b][_0x51feaf(0xbb)](_0x3762b9);
            }
            for (const _0x3db2f3 in _0x1ad8ca) {
                _0x4182e1 += _0x51feaf(0x8b) + _0x3db2f3[_0x51feaf(0xa6)]() + _0x51feaf(0xc3),
                    _0x4182e1 += '\x20✧' + _0x1ad8ca[_0x3db2f3][_0x51feaf(0x91)]()[_0x51feaf(0xbf)](_0x51feaf(0xb5)) + '\n',
                    _0x4182e1 += _0x51feaf(0xa8);
            }
            const _0x2fe5c5 = commands[_0x51feaf(0xaf)];
            _0x4182e1 += '━━━💖 Support Box 💖━━━\n',
                _0x4182e1 += 'Join Ancestor Bot Zone ❈ Support Box type: ' + _0x20eb27 + _0x51feaf(0x9d) + _0x20eb27 + _0x51feaf(0xb9),
                _0x4182e1 += _0x51feaf(0x99) + _0x2fe5c5 + _0x51feaf(0xc8),
                _0x4182e1 += _0x51feaf(0xce) + _0x20eb27 + _0x51feaf(0x8d),
                await _0x2f495a[_0x51feaf(0xb7)](_0x4182e1);
        }
        else {
            if (_0x2a7a65[0x0] === '-s' && _0x2a7a65[0x1]) {
                const _0x56eae9 = _0x2a7a65[0x1]['toLowerCase']();
                let _0x2ce9d9 = _0x51feaf(0xc5);
                const _0x861bb4 = [];
                for (const [_0x189796, _0x5e1c14] of commands) {
                    if (_0x5e1c14[_0x51feaf(0xb0)][_0x51feaf(0xb3)] > 0x1 && _0x12542b < _0x5e1c14[_0x51feaf(0xb0)][_0x51feaf(0xb3)]) continue;
                    _0x189796['startsWith'](_0x56eae9) && _0x861bb4['push'](_0x189796);
                }
                _0x861bb4['length'] > 0x0 ? (_0x2ce9d9 += 'Found ' + _0x861bb4[_0x51feaf(0x8e)] + _0x51feaf(0x96) + _0x56eae9['toUpperCase']() + '":\n', _0x2ce9d9 += _0x861bb4[_0x51feaf(0x91)]()['join'](_0x51feaf(0xb5))) : _0x2ce9d9 += _0x51feaf(0x9c) + _0x56eae9['toUpperCase']() + '".',
                    await _0x2f495a['reply'](_0x2ce9d9);
            }
            else {
                if (_0x2a7a65[0x0] === '-r' && _0x2a7a65[0x1]) {
                    const _0x39e673 = _0x2a7a65[0x1]['toLowerCase']();
                    let _0x9bca45 = _0x51feaf(0xc5);
                    if (_0x39e673 === _0x51feaf(0xd0))
                        _0x9bca45 += 'Here are the latest logs:\n[Log details...]\n';
                    else
                        _0x39e673 === _0x51feaf(0xc6) ? _0x9bca45 += _0x51feaf(0xcb) : _0x9bca45 += _0x51feaf(0xa4) + _0x39e673 + _0x51feaf(0x8c);
                    await _0x2f495a[_0x51feaf(0xb7)](_0x9bca45);
                }
                else {
                    if (_0x2a7a65[0x0] === '-m' && _0x2a7a65[0x1]) {
                        const _0x4e178f = _0x2a7a65[0x1]['toLowerCase']();
                        let _0x177a0b = '━━━💖 𝐌𝐎𝐑𝐎𝐍-𝐀𝐋𝐈-𝐁𝐎𝐓 💖 ━━━\n\n';
                        if (_0x4e178f === _0x51feaf(0xcd) && _0x2a7a65[0x2])
                            _0x177a0b += _0x51feaf(0xae) + _0x2a7a65[0x2] + '.\n';
                        else {
                            if (_0x4e178f === _0x51feaf(0xa0) && _0x2a7a65[0x2])
                                _0x177a0b += 'Stopped monitoring ' + _0x2a7a65[0x2] + '.\n';
                            else
                                _0x4e178f === 'status' ? _0x177a0b += 'Current monitoring status:\n[Monitoring details...]\n' : _0x177a0b += _0x51feaf(0xd5) + _0x4e178f + _0x51feaf(0x90);
                        }
                        await _0x2f495a[_0x51feaf(0xb7)](_0x177a0b);
                    }
                    else {
                        const _0x2490bd = _0x2a7a65[0x0]['toLowerCase'](),
                            _0x134ed9 = commands[_0x51feaf(0xcf)](_0x2490bd) || commands[_0x51feaf(0xcf)](aliases['get'](_0x2490bd));
                        if (!_0x134ed9)
                            await _0x2f495a[_0x51feaf(0xb7)](_0x51feaf(0x8a) + _0x2490bd + _0x51feaf(0xd7));
                        else {
                            const _0xd94037 = _0x134ed9['config'],
                                _0x4743b5 = roleTextToString(_0xd94037[_0x51feaf(0xb3)]),
                                _0x1c461a = _0xd94037[_0x51feaf(0x9f)] || _0x51feaf(0x9a),
                                _0x424ef8 = _0xd94037[_0x51feaf(0x94)] ? _0xd94037[_0x51feaf(0x94)]['en'] || _0x51feaf(0xc0) : _0x51feaf(0xc0),
                                _0x1e3965 = _0xd94037['guide']?.['en'] || 'No guide available.',
                                _0x526c95 = _0x1e3965['replace'](/{pn}/g, _0x20eb27)[_0x51feaf(0xd6)](/{cmdName}/g, _0xd94037[_0x51feaf(0xb8)]),
                                _0x15c6fc = _0x51feaf(0xc9) + _0xd94037['name'] + _0x51feaf(0xbe) + _0x424ef8 + _0x51feaf(0x97) + (_0xd94037['aliases'] ? _0xd94037['aliases'][_0x51feaf(0xbf)](', ') : 'Do not have') + _0x51feaf(0xab) + (_0xd94037[_0x51feaf(0xbd)] || _0x51feaf(0xb6)) + _0x51feaf(0x9e) + _0x4743b5 + _0x51feaf(0x9b) + (_0xd94037[_0x51feaf(0xa1)] || 0x1) + _0x51feaf(0x98) + _0x1c461a + '\n  ├── Usage\n  │ ' + _0x526c95 + _0x51feaf(0x95);
                            await _0x2f495a[_0x51feaf(0xb7)](_0x15c6fc);
                        }
                    }
                }
            }
        }
    }
};
function roleTextToString(_0x1e13b5) {
    const _0x478d19 = _0x2dfd7e;
    switch (_0x1e13b5) {
        case 0x0:
            return _0x478d19(0xc4);
        case 0x1:
            return '1 (Group administrators)';
        case 0x2:
            return _0x478d19(0xa9);
        default:
            return 'Unknown role';
    }
      }
